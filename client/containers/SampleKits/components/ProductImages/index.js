import React from 'react';
import productImage from 'assets/images/VC-SampleKit-Web.jpg';
import styles from './index.css';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.productImage} style={{ backgroundImage: `url(${productImage})` }} />
  </div>
);
