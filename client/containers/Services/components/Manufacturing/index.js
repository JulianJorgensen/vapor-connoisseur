import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import productImage from 'assets/images/servicesPlaceholder.png';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {}
}))
export default class ServicesManufacturing extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.manufacturing}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.manufacturingHeadline}</h2>
              <div className={styles.intro}><ReactMarkdown source={content.manufacturingBody} /></div>
            </header>
            <FeatureBoxes features={content.manufacturingFeatures} twoCol />
            <div className={styles.productImage} style={{backgroundImage: `url(${productImage})`}}></div>
          </div>

          <div className={styles.originalDesign}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.originalDesignHeadline}</h2>
            </header>

            <FeatureBoxes features={content.originalDesignFeatures} />
          </div>
        </div>
      </div>
    )
  }
}
