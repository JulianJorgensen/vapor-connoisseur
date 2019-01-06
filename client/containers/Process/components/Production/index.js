import React, { Component } from 'react';
import { connect } from 'react-redux';
import productImage from 'assets/images/processVape.jpg';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class processProduction extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.production}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.productionHeadline}</h2>
            </header>
            <FeatureBoxes features={content.productionFeatures} oneCol />
          </div>
          <div className={styles.productImage} style={{ backgroundImage: `url(${productImage})` }} />
        </div>
      </div>
    );
  }
}
