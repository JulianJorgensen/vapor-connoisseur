import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import bgSmoke from 'assets/images/Process_SmokeDARK-Web.png';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class ProcessShipping extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.shippingHeadline}</h2>
          </header>

          <FeatureBoxes features={content.shippingFeatures} />
        </div>
        <div className={styles.bgImage}>
          <img src={bgSmoke} alt='Background smoke' />
        </div>
      </div>
    )
  }
}
