import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import Client from 'shopify-buy';
import VariantSelector from 'shop/components/VariantSelector';
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

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

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
    let {
      product
    } = this.props;
    let variantImage = this.state.selectedVariantImage || product.images[0]
    let variant = this.state.selectedVariant || product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    console.log('variantImage', variantImage);
    return (
      <div className={styles.wrapper}>
        product title {variant.title}
        {variant.price}
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          product={product}
        />
        <img src={variantImage.src} alt={variantImage.altText || variant.title} />
        <label className={styles.option}>
          Quantity
          <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
        </label>
        <button className={styles.buyButton} onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
