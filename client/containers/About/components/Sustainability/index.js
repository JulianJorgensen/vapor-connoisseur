import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import FeatureBoxes from 'components/FeatureBoxes';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about || {}
}))
export default class AboutSustainability extends Component {
  render() {
    let { content } = this.props;
    console.log('content', content);
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.sustainabilityHeadline}</h2>
            <div className={styles.intro}><ReactMarkdown source={content.sustainabilityIntro} /></div>
          </header>

          <FeatureBoxes features={content.sustainabilityFeatures} />

          <div className={styles.middleImage} style={{backgroundImage: `url(${content.middleImage.fields.file.url})`}}>
            <div className={styles.meta}>XY-05</div>
          </div>
        </div>
      </div>
    )
  }
}
