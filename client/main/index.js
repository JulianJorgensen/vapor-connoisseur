import React from 'react';

import DocumentMeta from 'react-document-meta';
import styles from './index.css';

import {
  connect
} from 'react-redux';

import {
  withRouter
} from 'react-router-dom';

// actions
import * as shopActions from 'store/shop/actions';

// layout
import Header from './layout/Header';

// routes
import Routes from './routes';

// site meta data
const meta = {
  title: 'Vapor Connoisseur',
  description: 'Slogan',
  meta: {
    charset: 'utf-8'
  },
  auto: {
    ograph: true
  }
};

@withRouter
@connect()
export default class Main extends React.Component {
  componentWillMount() {
    // init shop
    this.props.dispatch(shopActions.initShop());
  }

  render() {
    return (
      <div className={styles.container}>
        <DocumentMeta {...meta} />
        <Header />
        <Routes />
      </div>
    )
  }
};
