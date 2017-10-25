import React, { Component } from 'react';
import Button from 'components/Button';
import LineItem from './components/LineItem';
import styles from './index.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    const {
      checkout,
      updateQuantityInCart,
      removeLineItemInCart,
      isCartOpen,
      handleCartClose,
    } = this.props;

    if (!checkout) {
      return false;
    }

    const { lineItems } = checkout;

    const renderLineItems = lineItems.map(lineItem => (
      <LineItem
        updateQuantityInCart={updateQuantityInCart}
        removeLineItemInCart={removeLineItemInCart}
        key={lineItem.id.toString()}
        lineItem={lineItem}
      />
    ));

    return (
      <div className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ''}`}>
        <header className={styles.cartHeader}>
          <h3 className={styles.headline}>Your cart</h3>
          <button
            onClick={handleCartClose}
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
              <span className={styles.pricing}>$ {checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className={styles.cartInfo}>
            <div className={styles.cartInfoTotal}>Taxes</div>
            <div className={styles.cartInfoPricing}>
              <span className={styles.pricing}>$ {checkout.totalTax}</span>
            </div>
          </div>
          <div className={styles.cartInfo}>
            <div className={styles.cartInfoTotal}>Total</div>
            <div className={styles.cartInfoPricing}>
              <span className={styles.pricing}>$ {checkout.totalPrice}</span>
            </div>
          </div>
          <button className={styles.cartCheckout} onClick={this.openCheckout}>Checkout</button>
        </footer>
      </div>
    );
  }
}
