import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { shopActions } from 'store/actions';
import Footer from 'layout/Footer';
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
  }

  componentDidReceiveProps(oldProps) {
    if (oldProps.match.url !== this.props.match.url) {
      this.setActiveProduct();
    }
  }

  componentWillMount() {
    this.setActiveProduct();
  }

  setActiveProduct() {
    let { showSingle, dispatch } = this.props;
    if (showSingle) {
      // set active product
      dispatch(shopActions.setActiveProduct());
    } else {
      // clear active product
      dispatch(shopActions.clearActiveProduct());
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
    let { shop } = this.props;

    let renderPage = () => {
      if (shop.product) {
        return <Product
          product={shop.product}
          addVariantToCart={this.addVariantToCart}
          onLoaded={this.props.onLoaded}
        />
      } else {
        return <Products
          products={shop.products}
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

        <div className={styles.container}>
          {renderPage()}
        </div>

        <Cart
          checkout={shop.checkout}
          isCartOpen={shop.showCart}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />

        <Footer />
      </div>
    );
  }
}

export default Shop;
