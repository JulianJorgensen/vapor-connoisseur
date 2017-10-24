import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import smokeBg from 'assets/images/Services_Smoke-Web.png';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {},
}))
export default class ServicesDesign extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.designHeadline}</h2>
            <div className={styles.intro}><ReactMarkdown source={content.designBody} /></div>
          </header>
          <FeatureBoxes features={content.designFeatures} />
        </div>
        <div className={styles.bgImage}>
          <img src={smokeBg} alt="" />
        </div>
      </div>
    );
  }
}
