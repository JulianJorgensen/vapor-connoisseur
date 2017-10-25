import React, { Component } from 'react';
import Client from 'shopify-buy';
import ReactHtmlParser from 'react-html-parser';
import VariantSelector from './components/VariantSelector';
import styles from './index.css';

export default class Product extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleAllOptionsSelected = this.handleAllOptionsSelected.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  componentWillMount() {
    const selectedOptions = {};
    this.props.product.options.forEach((selector) => {
      selectedOptions[selector.name] = selector.values[0].value;
    });

    this.setState({ selectedOptions });
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

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  }

  changeActiveImage(activeImage) {
    this.setState({ activeImage });
  }

  render() {
    const { product } = this.props;
    const { activeImage, selectedVariant, selectedVariantQuantity, selectedVariantImage, allOptionsSelected } = this.state;
    const image = activeImage || selectedVariantImage || product.images[0];
    const variant = selectedVariant || product.variants[0];
    const variantQuantity = selectedVariantQuantity || 1;

    const productColors = () => {
      const colorOptions = this.props.product.options.find((option) => {
        return option.name === 'Color';
      });

      if (!colorOptions) return false;

      const colors = colorOptions.values.map(color => color.value);
      return colors.join(', ');
    }

    const renderImages = () => product.images.map(productImage => (
      <button key={productImage.id} className={styles.image} onClick={() => this.changeActiveImage(productImage)}>
        <img src={productImage.src} alt={productImage.title} />
      </button>
    ));

    return (
      <div className={styles.wrapper}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.details}>
            <div className={styles.specifications}>
              <div className={styles.specification}>
                <div className={styles.specificationName}>Weight</div>
                <div className={styles.specificationValue}>{selectedVariant ? selectedVariant.weight : product.variants[0].weight} G</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.specificationName}>Colors</div>
                <div className={styles.specificationValue}>{productColors()}</div>
              </div>
            </div>
            <div className={styles.description}>
              { ReactHtmlParser(product.descriptionHtml) }
            </div>
          </div>
          <div className={styles.options}>
            <VariantSelector
              handleOptionChange={this.handleOptionChange}
              handleAllOptionsSelected={this.handleAllOptionsSelected}
              selectedVariant={variant}
              product={product}
            />
          </div>
          <div className={styles.cta}>
            <button
              className={styles.buyButton}
              disabled={!allOptionsSelected}
              onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}
            >
              Add to cart
            </button>
          </div>
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
