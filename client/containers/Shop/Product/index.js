import React, { Component } from 'react';
import { connect } from 'react-redux';
import Client from 'shopify-buy';
import VariantSelector from './components/VariantSelector';
import ReactHtmlParser from 'react-html-parser';
import styles from './index.css';

class Product extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  componentWillMount() {
    let selectedOptions = {};
    this.props.product.options.forEach((selector) => {
      selectedOptions[selector.name] = selector.values[0].value;
    });

    this.setState({
      selectedOptions: selectedOptions
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      // trigger parent onLoaded
      this.props.onLoaded();
    }
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter((image) => {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange({ variant, value }) {
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[variant] = value;

    const selectedVariant = Client.Product.Helpers.variantForOptions(this.props.product, selectedOptions);

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    let { product } = this.props;
    let { selectedVariant, selectedVariantQuantity, selectedVariantImage } = this.state;
    let variantImage = selectedVariantImage || product.images[0]
    let variant = selectedVariant || product.variants[0]
    let variantQuantity = selectedVariantQuantity || 1

    console.log('product', product);
    console.log('selectedVariant', selectedVariant);
    
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
                <div className={styles.specificationValue}></div>
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
            >Add to cart</button>
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.image} style={{backgroundImage: `url(${variantImage.src})`}}>
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

export default Product;
