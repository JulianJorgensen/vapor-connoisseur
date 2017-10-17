import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {}
}))
export default class ServicesDesign extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.section2}>
            <h2>{content.designHeadline}</h2>
            <ReactMarkdown source={content.designBody} />
          </div>

          <FeatureBoxes features={content.designFeatures} />
        </div>
      </div>
    )
  }
}
