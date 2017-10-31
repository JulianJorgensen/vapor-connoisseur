import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner';
import cn from 'classnames';
import styles from './index.css';

export default class Product extends Component {
  state = {};

  componentWillMount() {
    this.preloadImage();
  }

  handleImageLoaded = () => {
    this.setState({
      imageLoading: false,
    });
  }

  preloadImage = () => {
    const defaultImage = this.props.product.images[0];
    this.image = new Image();
    this.image.src = defaultImage.src;

    // if image has not been downloaded yet then load it
    if (!this.image.complete) {
      this.setState({
        imageLoading: true,
      });
      this.image.onload = this.handleImageLoaded;
    }
  }

  render() {
    const { imageLoading } = this.state;
    const { product } = this.props;
    const defaultVariant = product.variants[0];

    const imageWrapper = cn(styles.imageWrapper, {
      [styles.loading]: this.state.imageLoading,
    });

    const imageStyles = !imageLoading ? { backgroundImage: `url(${this.image.src})` } : {};

    return (
      <div className={styles.wrapper}>
        <Link to={`/shop/${product.productType.toLowerCase()}/${product.handle}`}>
          <div className={imageWrapper}>
            <div className={styles.image} style={imageStyles} />
            <LoadingSpinner className={styles.loadingSpinner} />
          </div>
        </Link>
        <div className={styles.productInfo}>
          <h3 className={styles.title}>{product.title}</h3>
          <span className={styles.price}>${defaultVariant.price}</span>
        </div>
      </div>
    );
  }
}
