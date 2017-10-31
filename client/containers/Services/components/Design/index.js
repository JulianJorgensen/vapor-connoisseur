import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import SmokeBg from 'assets/icons/smoke/VC_BGSmoke2.svg';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {},
}))
export default class ServicesDesign extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper} id="design">
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.designHeadline}</h2>
            <div className={styles.intro}><ReactMarkdown source={content.designBody} /></div>
          </header>
          <FeatureBoxes features={content.designFeatures} />
        </div>
        <div className={styles.bgImage}>
          <SmokeBg />
        </div>
      </div>
    );
  }
}
