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
  state = {};

  componentWillMount() {
    const features = [];
    this.props.content.serviceFeatures.map(feature => features.push(feature));
    this.setState({ features });
  }

  render() {
    const { content } = this.props;
    const { features } = this.state;

    const renderFeatures = () => {
      if (!features) return false;
      return (
        <div>
          <Desktop component={<Features features={features} />} />
          <MobileTablet component={<Features features={features} />} />
        </div>
      );
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.servicesHeadline}</h2>
            <div className={styles.intro}><ReactMarkdown source={content.servicesBody} /></div>
          </header>
        </div>
        {renderFeatures()}
      </div>
    );
  }
}
