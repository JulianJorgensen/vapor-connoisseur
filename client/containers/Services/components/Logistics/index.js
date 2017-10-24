import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {}
}))
export default class ServicesLogistics extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.logisticsHeadline}</h2>
            <div className={styles.intro}><ReactMarkdown source={content.logisticsBody} /></div>
          </header>
          <FeatureBoxes features={content.logisticsFeatures} />
        </div>
      </div>
    );
  }
}
