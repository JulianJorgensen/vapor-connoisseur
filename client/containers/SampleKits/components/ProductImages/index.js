import React, { Component } from 'react';
import productImage from 'assets/images/placeholder2.png';
import styles from './index.css';

export default class SampleKitsProductImages extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.productImage} style={{ backgroundImage: `url(${productImage})` }} />
      </div>
    )
  }
}
