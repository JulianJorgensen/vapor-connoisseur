import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class CustomerPathwayDuties extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2>{content.dutiesHeadline}</h2>

          <FeatureBoxes features={content.dutiesFeatures} />          
        </div>
      </div>
    )
  }
}
