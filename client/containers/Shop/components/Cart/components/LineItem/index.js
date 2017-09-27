import React, { Component } from 'react';
import styles from './index.css';

class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    console.log('line_item', this.props.line_item);
    let imageStyles = {};
    if (this.props.line_item.variant.image) {
      imageStyles.backgroundImage = `url(${this.props.line_item.variant.image.src})`
    }
    console.log('image styles', imageStyles);
    return (
      <li className={styles.container}>
        <div className={styles.image} style={imageStyles}></div>
        <div className={styles.content}>
          <div className={styles.contentRow}>
            <span className={styles.title}>
              {this.props.line_item.title}
            </span>
            <div className={styles.variantTitle}>
              {this.props.line_item.variant.title}
            </div>
            </div>
          <div className={styles.contentRow}>
            <div className={styles.quantityContainer}>
              <button className={styles.quantityUpdate} onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
              <span className={styles.quantity}>{this.props.line_item.quantity}</span>
              <button className={styles.quantityUpdate} onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
            </div>
            <span className={styles.price}>
              $ { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
            </span>
            <button className={styles.remove} onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}>×</button>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;
