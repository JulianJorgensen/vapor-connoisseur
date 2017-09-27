import React from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as shopActions from 'store/shop/actions';
import Header from './layout/Header';
import Routes from './routes';

import styles from './index.css';

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
    console.log('styles', styles);
    return (
      <div className={styles.container}>
        <DocumentMeta {...meta} />
        <Header />
        <Routes />
      </div>
    )
  }
};
