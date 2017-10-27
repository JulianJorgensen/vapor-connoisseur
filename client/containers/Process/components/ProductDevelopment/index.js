import React, { Component } from 'react';
import { connect } from 'react-redux';
import productImage from 'assets/images/XY05_LOGO-24.png';
import productImageMobile from 'assets/images/XY05_LOGO-24-small.png';
import FeatureBoxes from 'components/FeatureBoxes';
import { Desktop, MobileTablet } from 'utils/responsive';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class ProcessProductDevelopment extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.productDevelopment}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.productDevelopmentHeadline}</h2>
            </header>
            <FeatureBoxes features={content.productDevelopmentFeatures} twoCol />
          </div>
        </div>

        <Desktop>
          <div className={styles.productImage} style={{ backgroundImage: `url(${productImage})` }} />
        </Desktop>

        <MobileTablet>
          <div className={styles.productImage} style={{ backgroundImage: `url(${productImageMobile})` }} />
        </MobileTablet>
      </div>
    );
  }
}
