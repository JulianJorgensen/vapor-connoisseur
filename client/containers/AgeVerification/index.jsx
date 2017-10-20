import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { siteActions } from 'store/actions';
import { withCookies, Cookies } from 'react-cookie';

import Button from 'components/Button';

import styles from './index.css';

@withCookies
@withRouter
@connect()
export default class AgeVerification extends React.Component {
  verifyAge = () => {
    this.props.dispatch(siteActions.verifyAge());
    this.props.cookies.set('verified', 'true', { 
      path: '/',
      maxAge: '72000'
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h2>Please verify your age</h2>
        <button className={styles.cta} onClick={this.verifyAge}><span>I am over 21</span></button>
      </div>
    )
  }
}
