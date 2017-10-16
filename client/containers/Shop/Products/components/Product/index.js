import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner';
import cn from 'classnames';
import styles from './index.css';

class Product extends Component {
  state = {};

  preloadImage = () => {
    let defaultImage = this.props.product.images[0];
    this.image = new Image();
    this.image.src = defaultImage.src;

    // if image has not been downloaded yet then load it
    if (!this.image.complete) {
      this.setState({
        imageLoading: true
      });
      this.image.onload = this.handleImageLoaded;
    }
  }

  handleImageLoaded = () => {
    this.setState({
      imageLoading: false,
      imageLoaded: true
    });
  }

  componentWillMount() {
    this.preloadImage();
  }

  render() {
    let { imageLoading } = this.state;
    let { product } = this.props;
    let defaultVariant = product.variants[0];
    let defaultQuantity = 1;

    let _imageClasses = cn(styles.image, {
      [styles.loading]: this.state.imageLoading
    });

    let imageStyles = !imageLoading ? {backgroundImage: `url(${this.image.src})`} : {};

    return (
      <div className={styles.wrapper}>
        <Link to={`/shop/${product.productType.toLowerCase()}/${product.handle}`}>
          <div className={_imageClasses} style={imageStyles}>
            <LoadingSpinner className={styles.loadingSpinner} />
          </div>
          <h5 className={styles.title}>{product.title}</h5>
        </Link>
        <span className={styles.price}>${defaultVariant.price}</span>

        <button className={styles.buyButton} onClick={() => this.props.addVariantToCart(defaultVariant.id, defaultQuantity)}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
