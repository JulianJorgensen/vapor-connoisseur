import React, { Component } from 'react';
import LineItem from './components/LineItem';
import Button from 'components/Button';
import LoadingSpinner from 'components/LoadingSpinner';
import styles from './index.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let { checkout, updateQuantityInCart, removeLineItemInCart, isCartOpen, handleCartClose } = this.props;

    if (!checkout) {
      return false;
    }

    let { lineItems } = checkout;

    let line_items = lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={updateQuantityInCart}
          removeLineItemInCart={removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });

    return (
      <div className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ''}`}>
        <header className={styles.cartHeader}>
          <h2>Your cart</h2>
          <button
            onClick={handleCartClose}
            className={styles.cartClose}>
            ×
          </button>
        </header>
        <ul className={styles.cartLineItems}>
          {line_items}
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
          <Button className={styles.cartCheckout} onClick={this.openCheckout}>Checkout</Button>
        </footer>
      </div>
    )
  }
}

export default Cart;
