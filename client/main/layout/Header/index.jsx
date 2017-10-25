import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import { shopActions } from 'store/actions';
import Logo from 'components/Logo';
import Nav from './components/Nav';
import Bars from './components/Bars';
import styles from './index.css';

@withRouter
@connect(({ site, shop }) => ({
  site,
  shop,
}))
export default class Header extends React.Component {
  render() {
    const { site, shop } = this.props;

    const getCartItemsCount = () => {
      if (!shop.checkout) return false;
      return `(${shop.checkout.lineItems.length})`;
    };

    const renderCart = () => {
      if (shop.showCart) return false;
      if (!shop.checkout) return false;
      if (site.navOpen) return false;
      if (shop.checkout.lineItems.length <= 0) return false;
      return (
        <button
          className={styles.cart}
          onClick={() => this.props.dispatch(shopActions.toggleCart())}
        >
          Cart {getCartItemsCount()}
        </button>
      );
    };

    return (
      <div className={styles.wrapper}>
        <Headroom className={styles.headroom} pinStart={0} disableInlineStyles>
          <header className={styles.container}>
            <Logo className={styles.logo} />
            <div className={styles.rightCol}>
              {renderCart()}
              <Bars />
            </div>
          </header>
        </Headroom>
        <Nav />
      </div>
    )
  }
}
