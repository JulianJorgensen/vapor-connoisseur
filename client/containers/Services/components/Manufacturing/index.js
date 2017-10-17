import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

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
          <div className={styles.section}>
            <h2>{content.manufacturingHeadline}</h2>
            <ReactMarkdown source={content.manufacturingBody} />
          </div>

          <FeatureBoxes features={content.manufacturingFeatures} />
          
          <div className={styles.section}>
            <h2>{content.originalDesignHeadline}</h2>
          </div>

          <FeatureBoxes features={content.originalDesignFeatures} />
        </div>
      </div>
    )
  }
}
