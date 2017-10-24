import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userIsAuthenticated } from 'routes/utils';
import { siteActions } from 'store/actions';

import FacebookIcon from 'assets/icons/FontAwesome/brands/facebook.svg';
import InstagramIcon from 'assets/icons/FontAwesome/brands/instagram.svg';
import TwitterIcon from 'assets/icons/FontAwesome/brands/twitter.svg';

import styles from './index.css';

@withRouter
@userIsAuthenticated
@connect(({ site }) => ({
  navOpen: site.navOpen,
}))
export default class Nav extends React.Component {
  handleToggleNav = () => {
    this.props.dispatch(siteActions.toggleNav());
  }

  render() {
    const { navOpen } = this.props;

    const navStyles = cn(styles.nav, {
      [styles.open]: navOpen,
    });

    return (
      <div className={styles.wrapper}>
        <div className={navStyles}>
          <div className={styles.socialMedia}>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
          <ul className={styles.navItems}>
            <li className={styles.navItem}><Link to="/">Home</Link></li>
            <li className={styles.navItem}><Link to="/about">About</Link></li>
            <li className={styles.navItem}><Link to="/services">Services</Link></li>
            <li className={styles.navItem}><Link to="/process">Process</Link></li>
            <li className={styles.navItem}><Link to="/shop">Products</Link></li>
            <li className={styles.navItem}><Link to="/sample-kits">Sample Kits</Link></li>
            <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
          </ul>
          <div className={styles.navFooter}>
            <div>
              <p><a href="mailto:hi@vaporconnoisseur.com">hi@vaporconnoisseur.com</a></p>
              <p><phone>877 330 0370</phone></p>
            </div>
            <address>
              <p>2020 E Main St, Ventura</p>
              <p>CA 93001, USA</p>
            </address>
          </div>
        </div>
      </div>
    );
  }
}
