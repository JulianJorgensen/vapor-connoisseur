import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { siteActions } from 'store/actions';
import bgSmoke from 'assets/images/VC_BGSmoke1.png';
import styles from './index.css';

@withCookies
@withRouter
@connect()
export default class AgeVerification extends React.Component {
  verifyAge = () => {
    this.props.dispatch(siteActions.verifyAge());
    this.props.cookies.set('verified', 'true', {
      path: '/',
      maxAge: '72000',
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>Please verify your age</h2>
        <button className={styles.cta} onClick={this.verifyAge}><span>I am over 21</span></button>
        {/* <div className={styles.bgImage}>
          <img src={bgSmoke} alt="" />
        </div> */}
      </div>
    );
  }
}
