import React from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { shopActions, siteActions } from 'store/actions';
import Header from './layout/Header';
import Routes from './routes';

import styles from './index.css';

// site meta data
const meta = {
  title: 'Vapor Connoisseur',
  description: 'Slogan',
  meta: {
    charset: 'utf-8',
  },
  auto: {
    ograph: true,
  }
};

@withCookies
@withRouter
@connect()
export default class Main extends React.Component {
  componentWillMount() {
    // fetch content
    this.props.dispatch(siteActions.fetchContent());

    // init shop
    this.props.dispatch(shopActions.initShop());

    // check if age already verified using cookies
    if (this.props.cookies.get('verified')) {
      this.props.dispatch(siteActions.verifyAge());
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <DocumentMeta {...meta} />
        <Header />
        <Routes />
      </div>
    );
  }
}
