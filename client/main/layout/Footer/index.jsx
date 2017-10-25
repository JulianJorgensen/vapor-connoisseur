import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { userIsAuthenticated } from 'routes/utils';
import Logo from 'components/Logo';

import bgImage from 'assets/images/VC_BGSmoke3.png';
import styles from './index.css';

@withRouter
@userIsAuthenticated
export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.details}>
            <Logo className={styles.logo} />
            <address>877 330 0370<br />
              <a href="mailto:INFO@VAPORCONNOISSEUR.COM">INFO@VAPORCONNOISSEUR.COM</a><br />
              VENTURA, CALIFORNIA
            </address>
          </div>
          <div className={styles.nav}>
            <ul className="noBullets">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/shop">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/sample-kits">Sample Kits</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul className="noBullets">
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/affiliate-marketing">Affiliate Marketing</Link></li>
              <li><Link to="/refunds-and-returns">Refunds & Returns</Link></li>
              <li><Link to="/orders-and-shipping">Orders & Shipping</Link></li>
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
          <img src={bgImage} alt="" />
        </div>
      </footer>
    )
  }
}
