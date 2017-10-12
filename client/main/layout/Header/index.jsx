import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Nav from './components/Nav';
import styles from './index.css';

@withRouter
export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.container}>
        <div onClick={() => this.props.history.push('/')}>logo</div>
        <Nav />
      </header>
    )
  }
}
