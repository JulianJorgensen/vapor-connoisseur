import React, { Component } from 'react';
import { connect } from 'react-redux';
import bgSmoke from 'assets/images/VC_BGSmoke1.png';
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
          <img src={bgSmoke} alt="" />
        </div>
      </div>
    );
  }
}
