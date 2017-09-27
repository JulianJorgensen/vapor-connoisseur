import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as shopActions from 'store/shop/actions';
import Product from './Product';
import Products from './Products';
import Cart from './components/Cart';
import styles from './index.css';

@withRouter
@connect(({ shop }) => ({
  shop
}))
class Shop extends Component {
  constructor() {
    super();

    this.state = {
      productHandle: null
    }

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  componentWillUpdate(newProps) {
    if (this.props.match.url !== newProps.match.url) {
      let {
        showSingle,
        dispatch
      } = newProps;
      console.log('props', newProps);
      if (showSingle) {
        console.log('show active prod');
        // set active product
        dispatch(shopActions.setActiveProduct());
      } else {
        // clear active product
        dispatch(shopActions.clearActiveProduct());
      }
    }
  }

  componentDidUpdate(oldProps) {
    if ((!oldProps.shop.products && this.props.shop.products) || (oldProps.match.url !== this.props.match.url)) {
      this.filterProducts();
    }
  }

  filterProducts() {
    let {
      products
    } = this.props.shop;

    if (!products) {
      return false;
    }

    let filter = this.props.match.params.filter || null
    if (filter) {
      let productsFiltered = products.filter((product) => {
        if (product.productType.toLowerCase() !== filter) {
          return false;
        }

        return true;
      });

      this.setState({
        productsFiltered
      });
    } else {
      this.setState({
        productsFiltered: null
      })
    }
  }

  addVariantToCart(variantId, quantity) {
    let {
      dispatch
    } = this.props;

    // open cart
    dispatch(shopActions.openCart());

    // create checkout
    const lineItemsToAdd = [{
      variantId,
      quantity: parseInt(quantity, 10)
    }];
    dispatch(shopActions.addLineItems(lineItemsToAdd));
  }

  updateQuantityInCart(lineItemId, quantity) {
    const lineItemsToUpdate = [{
      id: lineItemId,
      quantity: parseInt(quantity, 10)
    }]

    // update line items
    this.props.dispatch(shopActions.updateLineItems(lineItemsToUpdate));
  }

  removeLineItemInCart(lineItemId) {
    // remove line item
    this.props.dispatch(shopActions.removeLineItem(lineItemId));
  }

  handleCartClose() {
    // close cart
    this.props.dispatch(shopActions.closeCart());
  }

  render() {
    let {
      shop
    } = this.props;
    let {
      productsFiltered
    } = this.state;

    let renderPage = () => {
      if (shop.product) {
        return <Product
          product={shop.product}
          addVariantToCart={this.addVariantToCart}
          onLoaded={this.props.onLoaded}
        />
      } else {
        return <Products
          products={productsFiltered ? productsFiltered : shop.products}
          addVariantToCart={this.addVariantToCart}
          onLoaded={this.props.onLoaded}
        />
      }
    }

    return (
      <div className={styles.wrapper}>

        {!shop.showCart &&
          <div className={styles.cart} onClick={()=>this.props.dispatch(shopActions.toggleCart())}>Cart</div>
        }

        {renderPage()}

        <Cart
          checkout={shop.checkout}
          isCartOpen={shop.showCart}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </div>
    );
  }
}

export default Shop;
