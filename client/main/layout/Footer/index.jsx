import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { userIsAuthenticated } from 'routes/utils';
import Logo from 'components/Logo';

import SmokeBg from 'assets/icons/smoke/VC_BGSmoke3.svg';
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
              <li><Link to="/legal/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/legal/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/legal/affiliate-marketing">Affiliate Marketing</Link></li>
              <li><Link to="/legal/refunds-and-returns">Refunds & Returns</Link></li>
              <li><Link to="/legal/orders-and-shipping">Orders & Shipping</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.copyright}>
            <div>Copyright 2017 | All rights reserved</div>
            <div><a href="https://sunniva.com" target="new">A Sunniva company</a></div>
          </div>
        </div>
        <div className={styles.bgImage}>
          <SmokeBg />
        </div>
      </footer>
    )
  }
}
