import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Desktop, MobileTablet } from 'utils/responsive';

import Features from './components/Features';
import FeaturesMobile from './components/FeaturesMobile';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about || {},
}))
export default class AboutServices extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.servicesHeadline}</h2>
            <div className={styles.intro}><ReactMarkdown source={content.servicesBody} /></div>
          </header>

          <Desktop component={<Features />} />
          <MobileTablet component={<FeaturesMobile />} />
        </div>
      </div>
    );
  }
}
