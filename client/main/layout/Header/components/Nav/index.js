import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userIsAuthenticated } from 'routes/utils';
import { siteActions } from 'store/actions';

import styles from './index.css';

@withRouter
@userIsAuthenticated
@connect(
  ({ site }) => ({
    navOpen: site.navOpen
  })
)
export default class Nav extends React.Component {
  handleToggleNav = () => {
    this.props.dispatch(siteActions.toggleNav());
  }

  render() {
    let { navOpen } = this.props;

    let _navStyles = cn(styles.nav, {
      [styles.open]: navOpen
    });

    let _barsStyles = cn(styles.bars, {
      [styles.open]: navOpen
    });

    return (
      <div className={styles.wrapper}>
        <div className={_barsStyles} onClick={this.handleToggleNav}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={_navStyles}>
          <ul className={styles.navItems}>
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
    )
  }
}
