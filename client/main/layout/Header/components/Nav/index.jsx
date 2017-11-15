import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userIsAuthenticated } from 'routes/utils';
import { siteActions } from 'store/actions';
import FacebookIcon from 'assets/icons/FontAwesome/brands/facebook.svg';
import TwitterIcon from 'assets/icons/FontAwesome/brands/twitter.svg';
import PinterestIcon from 'assets/icons/FontAwesome/brands/pinterest.svg';
import InstagramIcon from 'assets/icons/FontAwesome/brands/instagram.svg';

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

    const wrapperStyles = cn(styles.wrapper, {
      [styles.open]: navOpen,
    });

    return (
      <div className={wrapperStyles}>
        <div className={styles.nav}>
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/VaporConnoisseur/" target="new"><FacebookIcon /></a>
            <a href="https://twitter.com/VapeConnoisseur" target="new"><TwitterIcon /></a>
            <a href="https://www.pinterest.com/vapeconnoisseur/" target="new"><PinterestIcon /></a>
            <a href="https://www.instagram.com/vaporconnoisseurig/" target="new"><InstagramIcon /></a>
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
              <a href="mailto:info@vaporconnoisseur.com">info@vaporconnoisseur.com</a><br />
              <phone><a href="tel:+18773300370">877 330 0370</a></phone>
            </div>
            <address>
              <a href="https://www.google.co.in/maps?q=1755+E.+Palm+Canyon+Dr.,+Suite+110-261,+Palm+Springs,+CA+92264&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiflb6j_73XAhWBv48KHYCYClYQ_AUICigB" target="new">
                1755 E. Palm Canyon Dr., Suite 110-261<br />
                Palm Springs, CA 92264
              </a>
            </address>
          </div>
        </div>
      </div>
    );
  }
}
