import React from 'react';
import DocumentMeta from 'react-document-meta';
import cn from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { shopActions, siteActions } from 'store/actions';

import homeImage from 'assets/images/homeProduct.jpg';
import aboutImage from 'assets/images/Vapor65149.jpg';
import servicesImage from 'assets/images/servicesBg.jpg';
import processImage from 'assets/images/GENIECL-Angle2-24.webp';

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
@connect(({ shop }) => ({
  shop,
}))
export default class Main extends React.Component {
  constructor() {
    super();

    this.preloadedImages = [];
  }

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

  componentDidMount() {
    this.preloadAssets();
  }

  preloadImages(images) {
    let preloadedImage;
    images.map((image) => {
      preloadedImage = new Image();
      preloadedImage.src = image;
      return preloadedImage;
    });
    this.preloadedImages = images;
  }

  preloadAssets() {
    this.preloadImages([
      homeImage,
      aboutImage,
      servicesImage,
      processImage,
    ]);
  }

  render() {
    const { showCart } = this.props.shop;
    const wrapperStyles = cn(styles.wrapper, {
      [styles.showCart]: showCart,
    })
    return (
      <div className={wrapperStyles}>
        <DocumentMeta {...meta} />
        <Header />
        <Routes />
      </div>
    );
  }
}
