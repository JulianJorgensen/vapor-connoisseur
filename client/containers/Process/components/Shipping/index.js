import React, { Component } from 'react';
import { connect } from 'react-redux';
import BgSmoke from 'assets/icons/smoke/VC_BGSmoke1.svg';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {},
}))
export default class ProcessShipping extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.shippingHeadline}</h2>
          </header>

          <FeatureBoxes features={content.shippingFeatures} />
        </div>
        <div className={styles.bgImage}>
          <BgSmoke />
        </div>
      </div>
    );
  }
}
