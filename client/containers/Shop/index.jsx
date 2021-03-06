import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { shopActions } from 'store/actions';
import Footer from 'layout/Footer';
import Product from './Product';
import Products from './Products';
import styles from './index.css';

@withRouter
@connect(({ shop }) => ({
  shop,
}))
export default class Shop extends Component {
  constructor() {
    super();

    this.addVariantToCart = this.addVariantToCart.bind(this);
  }

  componentWillMount() {
    this.setActiveProduct();
  }

  setActiveProduct() {
    const { dispatch, match } = this.props;

    if (match.params && match.params.productHandle) {
      // set active product
      dispatch(shopActions.setActiveProduct());
    } else {
      // clear active product
      dispatch(shopActions.clearActiveProduct());
    }
  }

  componentDidReceiveProps(oldProps) {
    if (oldProps.match.url !== this.props.match.url) {
      this.setActiveProduct();
    }
  }

  addVariantToCart(variantId, quantity) {
    const { dispatch } = this.props;

    // open cart
    dispatch(shopActions.openCart());

    // create checkout
    const lineItemsToAdd = [{
      variantId,
      quantity: parseInt(quantity, 10),
    }];
    dispatch(shopActions.addLineItems(lineItemsToAdd));
  }

  render() {
    const { shop } = this.props;

    if (!shop.products) return false;

    // just show product video. Comment this out if you want to show the actual products from Shopify
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <iframe src="https://player.vimeo.com/video/309723028" width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <Footer />
        </div>
      </div>
    )
  
    const renderPage = () => {
      if (shop.product) {
        return (
          <Product
            product={shop.product}
            addVariantToCart={this.addVariantToCart}
            onLoaded={this.props.onLoaded}
          />
        );
      }

      return (
        <Products
          products={shop.products}
          addVariantToCart={this.addVariantToCart}
          onLoaded={this.props.onLoaded}
        />
      );
    };

    return (
      <div className={styles.wrapper}>
        <div className="animatedSection">
          {renderPage()}
          <Footer />
        </div>
      </div>
    );
  }
}
