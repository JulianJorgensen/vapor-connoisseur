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
    const { showSingle, dispatch } = this.props;
    if (showSingle) {
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
        <div className="inner">
          {renderPage()}
          <Footer />
        </div>
      </div>
    );
  }
}
