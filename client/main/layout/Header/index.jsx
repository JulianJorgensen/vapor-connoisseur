import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import styles from './index.css';

@withRouter
export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.container}>
        <ul className={styles.nav}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/how'>How it works</Link></li>
          <li><Link to='/shop'>Products</Link></li>
          <li><Link to='/about'>About VC</Link></li>
          <li><Link to='/sample-kits'>Sample kits</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </header>
    )
  }
}
