import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Headroom from 'react-headroom';

import Nav from './components/Nav';
import Bars from './components/Bars';
import Logo from 'components/Logo';
import styles from './index.css';

@withRouter
export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Headroom className={styles.headroom} pinStart={0} disableInlineStyles>
          <header className={styles.container}>
            <Logo className={styles.logo} />
            <Bars />
          </header>
        </Headroom>
        <Nav />
      </div>
    )
  }
}
