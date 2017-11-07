import React, { Component } from 'react';
import Client from 'shopify-buy';
import cn from 'classnames';
import ReactHtmlParser from 'react-html-parser';
import PlusIcon from 'assets/icons/FontAwesome/regular/plus.svg';
import CheckIcon from 'assets/icons/FontAwesome/regular/check.svg';
import VariantSelector from './components/VariantSelector';
import styles from './index.css';

export default class Product extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleAllOptionsSelected = this.handleAllOptionsSelected.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentWillMount() {
    const selectedOptions = {};
    this.props.product.options.forEach((selector) => {
      selectedOptions[selector.name] = selector.values[0].value;
    });

    this.setState({ selectedOptions });

    if (this.props.product.variants[0].title === 'Default Title') {
      this.hasVariants = false;
      this.handleAllOptionsSelected();
    } else {
      this.hasVariants = true;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      // trigger parent onLoaded
      this.props.onLoaded();
    }
  }

  handleAllOptionsSelected() {
    this.setState({ allOptionsSelected: true });
  }

  handleOptionChange({ variant, value }) {
    const { selectedOptions } = this.state;
    selectedOptions[variant] = value;

    const selectedVariant = Client.Product.Helpers.variantForOptions(this.props.product, selectedOptions);

    // set state
    this.setState({
      selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  }

  changeActiveImage(activeImage) {
    this.setState({ activeImage });
  }

  addToCart(variant) {
    if (!this.state.allOptionsSelected) {
      this.setState({ ctaMessage: 'Please select your product specifications above.' });
      return false;
    }
    this.setState({ addedToCart: true });
    this.props.addVariantToCart(variant.id, 1);
    return true;
  }

  render() {
    const { product } = this.props;
    const {
      activeImage, selectedVariant, selectedVariantImage, allOptionsSelected, ctaMessage, addedToCart,
    } = this.state;
    const image = activeImage || selectedVariantImage || product.images[0];
    const variant = selectedVariant || product.variants[0];
    
    const productColors = () => {
      const colorOptions = this.props.product.options.find(option => option.name === 'Color');
      if (!colorOptions) return false;

      const colors = colorOptions.values.map(color => color.value);
      return colors.join(', ');
    };

    const renderImages = () => product.images.map(productImage => (
      <button key={productImage.id} className={styles.image} onClick={() => this.changeActiveImage(productImage)}>
        <img src={productImage.src} alt={productImage.title} />
      </button>
    ));

    const buyButtonStyles = cn(styles.buyButton, {
      [styles.disabled]: !allOptionsSelected,
    });

    const iconStyles = cn(styles.icon, {
      [styles.addedToCart]: addedToCart,
    });

    const renderWeight = () => {
      if (selectedVariant && selectedVariant.weight <= 0) return false;
      if (product.variants[0].weight <= 0) return false;
      return (
        <div className={styles.specification}>
          <div className={styles.specificationName}>Weight</div>
          <div className={styles.specificationValue}>{selectedVariant ? selectedVariant.weight : product.variants[0].weight} G</div>
        </div>
      );
    };

    const renderColors = () => {
      if (!productColors()) return false;
      return (
        <div className={styles.specification}>
          <div className={styles.specificationName}>Colors</div>
          <div className={styles.specificationValue}>{productColors()}</div>
        </div>
      );
    };

    const renderSpecifications = () => {
      if (selectedVariant) {
        if (!productColors() && selectedVariant.weight <= 0) return false;
      }
      if (!productColors() && product.variants[0].weight <= 0) return false;
      return (
        <div className={styles.specifications}>
          {renderWeight()}
          {renderColors()}
        </div>
      );
    };

    const renderVariantSelector = () => {
      if (!this.hasVariants) return false;
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          handleAllOptionsSelected={this.handleAllOptionsSelected}
          selectedVariant={variant}
          product={product}
        />
      );
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.details}>
            {renderSpecifications()}
            <div className={styles.description}>
              { ReactHtmlParser(product.descriptionHtml) }
            </div>
          </div>
          <div className={styles.options}>
            {renderVariantSelector()}
          </div>
          {/* <div className={styles.cta}>
            <div
              className={buyButtonStyles}
              onClick={() => this.addToCart(variant)}
            >
              <div>Add to cart</div>
              <div className={iconStyles}>
                <PlusIcon className={styles.plus} />
                <CheckIcon className={styles.check} />
              </div>
            </div>
            <div className={styles.ctaMessage}>{ctaMessage}</div>
          </div> */}
        </div>
        <div className={styles.rightCol}>
          <div className={styles.image} style={{ backgroundImage: `url(${image.src})` }}>
            <div className={styles.images}>
              {renderImages()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
