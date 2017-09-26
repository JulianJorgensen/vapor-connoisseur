import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './index.css';

class Product extends Component {
  render() {
    let { product } = this.props;
    let defaultImage = product.images[0];
    let defaultVariant = product.variants[0];
    let defaultQuantity = 1;

    return (
      <div className={styles.wrapper}>
        <Link to={`/shop/${product.productType.toLowerCase()}/${product.handle}`}>
          {product.images.length ? <img src={defaultImage.src} alt={`${product.title} product shot`}/> : null}
          <h5 className={styles.title}>{product.title}</h5>
        </Link>
        <span className={styles.price}>${defaultVariant.price}</span>

        <button className={styles.buyButton} onClick={() => this.props.addVariantToCart(defaultVariant.id, defaultQuantity)}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
