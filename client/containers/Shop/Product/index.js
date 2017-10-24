import React, { Component } from 'react';
import Client from 'shopify-buy';
import ReactHtmlParser from 'react-html-parser';
import VariantSelector from './components/VariantSelector';
import styles from './index.css';

export default class Product extends Component {
  constructor() {
    super();

    this.state = {};

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

  handleOptionChange({ variant, value }) {
    const { selectedOptions } = this.state;
    selectedOptions[variant] = value;

    const selectedVariant = Client.Product.Helpers.variantForOptions(this.props.product, selectedOptions);

    this.setState({
      selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    const { product } = this.props;
    const { selectedVariant, selectedVariantQuantity, selectedVariantImage } = this.state;
    const variantImage = selectedVariantImage || product.images[0];
    const variant = selectedVariant || product.variants[0];
    const variantQuantity = selectedVariantQuantity || 1;

    return (
      <div className={styles.wrapper}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.details}>
            <div className={styles.specifications}>
              <div className={styles.specification}>
                <div className={styles.specificationName}>Weight</div>
                <div className={styles.specificationValue}>{selectedVariant ? selectedVariant.weight : product.variants[0].weight}</div>
              </div>
              <div className={styles.specification}>
                <div className={styles.specificationName}>Dimensions</div>
                <div className={styles.specificationValue} />
              </div>
              <div className={styles.specification}>
                <div className={styles.specificationName}>Colors</div>
                <div className={styles.specificationValue}>40g</div>
              </div>
            </div>
            <div className={styles.description}>
              { ReactHtmlParser(product.descriptionHtml) }
            </div>
          </div>
          <div className={styles.options}>
            <VariantSelector
              handleOptionChange={this.handleOptionChange}
              selectedVariant={variant}
              product={product}
            />
          </div>
          <div className={styles.cta}>
            <button
              className={styles.buyButton}
              onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}            
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.image} style={{ backgroundImage: `url(${variantImage.src})` }}>
            <ul className={styles.images}>
              <li><img src={variantImage.src} alt={variantImage.title} /></li>
              <li><img src={variantImage.src} alt={variantImage.title} /></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
