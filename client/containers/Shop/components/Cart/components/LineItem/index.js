import React, { Component } from 'react';
import styles from './index.css';

export default class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.lineItem.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.lineItem.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    const imageStyles = {};
    if (this.props.lineItem.variant.image) {
      imageStyles.backgroundImage = `url(${this.props.lineItem.variant.image.src})`;
    }
    return (
      <li className={styles.container}>
        <div className={styles.image} style={imageStyles} />
        <div className={styles.content}>
          <div className={styles.contentRow}>
            <span className={styles.title}>
              {this.props.lineItem.title}
            </span>
            <div className={styles.variantTitle}>
              {this.props.lineItem.variant.title}
            </div>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.quantityContainer}>
              <button 
                className={styles.quantityUpdate}
                onClick={() => this.decrementQuantity(this.props.lineItem.id)}
              >
                -
              </button>
              <span className={styles.quantity}>{this.props.lineItem.quantity}</span>
              <button
                className={styles.quantityUpdate}
                onClick={() => this.incrementQuantity(this.props.lineItem.id)}
              >
                +
              </button>
            </div>
            <span className={styles.price}>
              $ { (this.props.lineItem.quantity * this.props.lineItem.variant.price).toFixed(2) }
            </span>
            <button
              className={styles.remove}
              onClick={() => this.props.removeLineItemInCart(this.props.lineItem.id)}
            >
              ×
            </button>
          </div>
        </div>
      </li>
    );
  }
}
