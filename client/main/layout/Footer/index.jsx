import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userIsAuthenticated } from 'routes/utils';

import bgImage from 'assets/images/Footer_SmokeDARK-Web.png';
import styles from './index.css';

@withRouter
@userIsAuthenticated
export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.details}>
            <div className={styles.logo}>Logo</div>
            <div>188888<br />info@vapor<br />vetura claifornia</div>
          </div>
          <div className={styles.nav}>
            <ul className='noBullets'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/how'>How it works</Link></li>
              <li><Link to='/shop'>Products</Link></li>
              <li><Link to='/about'>About VC</Link></li>
              <li><Link to='/sample-kits'>Sample kits</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <ul className='noBullets'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/how'>How it works</Link></li>
              <li><Link to='/shop'>Products</Link></li>
              <li><Link to='/about'>About VC</Link></li>
              <li><Link to='/sample-kits'>Sample kits</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.copyright}>
            <div>Copyright 2017 | All rights reserved</div>
            <div>A Sunniva company</div>
          </div>
        </div>
        <div className={styles.bgImage}>
          <img src={bgImage} />
        </div>
      </footer>
    )
  }
}
