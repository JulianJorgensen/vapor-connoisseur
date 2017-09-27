import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import styles from './index.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.container}>
        <ul className={styles.nav}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/how'>How it works</Link></li>
          <li><Link to='/shop'>Products</Link></li>
          <li><Link to='/about'>About VC</Link></li>
          <li><Link to='/sample-kits'>Sample kits</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </footer>
    )
  }
}
