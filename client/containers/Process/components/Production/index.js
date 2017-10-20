import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import productImage from 'assets/images/XY05_EXPLO2-Web.jpg'
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class processProduction extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.production}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.productionHeadline}</h2>
            </header>
            <FeatureBoxes features={content.productionFeatures} oneCol />          
          </div>
          <div className={styles.productImage} style={{backgroundImage: `url(${productImage})`}}></div>
        </div>
      </div>
    )
  }
}
