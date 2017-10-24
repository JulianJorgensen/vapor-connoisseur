import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './index.css';

@withRouter
export default class ProductsNav extends Component {
  render() {
    return (
      <ul className={styles.wrapper}>
        <li><Link to="/shop">all</Link></li>
        <li><Link to="/shop/cartridge">cartridges</Link></li>
        <li><Link to="/shop/battery">batteries</Link></li>
      </ul>
    );
  }
}
