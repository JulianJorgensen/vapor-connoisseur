import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shopActions } from 'store/actions';
import LineItem from './components/LineItem';
import styles from './index.css';

@connect(({ shop }) => ({
  shop,
}))
export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
  }

  updateQuantityInCart(lineItemId, quantity) {
    const lineItemsToUpdate = [{
      id: lineItemId,
      quantity: parseInt(quantity, 10)
    }];

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

  openCheckout() {
    window.open(this.props.shop.checkout.webUrl);
  }

  render() {
    const { shop } = this.props;

    if (!shop || !shop.checkout || !shop.checkout.lineItems) {
      return false;
    }

    const { lineItems } = shop.checkout;

    const renderLineItems = lineItems.map(lineItem => (
      <LineItem
        updateQuantityInCart={this.updateQuantityInCart}
        removeLineItemInCart={this.removeLineItemInCart}
        key={lineItem.id.toString()}
        lineItem={lineItem}
      />
    ));

    return (
      <div>
        <div className={`${styles.cart} ${shop.showCart ? styles.cartOpen : ''}`}>
          <header className={styles.cartHeader}>
            <h3 className={styles.headline}>Your cart</h3>
            <button
              onClick={this.handleCartClose}
              className={styles.cartClose}
            >
              ×
            </button>
          </header>
          <ul className={styles.cartLineItems}>
            {renderLineItems}
          </ul>
          <footer className={styles.cartFooter}>
            <div className={styles.cartInfo}>
              <div className={styles.cartInfoTotal}>Subtotal</div>
              <div className={styles.cartInfoPricing}>
                <span className={styles.pricing}>$ {shop.checkout.subtotalPrice}</span>
              </div>
            </div>
            <div className={styles.cartInfo}>
              <div className={styles.cartInfoTotal}>Taxes</div>
              <div className={styles.cartInfoPricing}>
                <span className={styles.pricing}>$ {shop.checkout.totalTax}</span>
              </div>
            </div>
            <div className={styles.cartInfo}>
              <div className={styles.cartInfoTotal}>Total</div>
              <div className={styles.cartInfoPricing}>
                <span className={styles.pricing}>$ {shop.checkout.totalPrice}</span>
              </div>
            </div>
            <button className={styles.cartCheckout} onClick={this.openCheckout}>Checkout</button>
          </footer>
        </div>
        <div className={`${styles.bgOverlay} ${shop.showCart ? styles.active : ''}`} onClick={this.handleCartClose} />
      </div>
    );
  }
}
