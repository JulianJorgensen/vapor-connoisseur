import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plx from 'react-plx';
import { Parallax } from 'react-parallax';
import ReactMarkdown from 'react-markdown';
import productImage from 'assets/images/servicesMiddleImage.jpg';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {},
}))
export default class ServicesManufacturing extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper} id="manufacturing">
        <div className={styles.container}>
          <div className={styles.manufacturing}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.manufacturingHeadline}</h2>
              <div className={styles.intro}>
                <ReactMarkdown source={content.manufacturingBody} />
              </div>
            </header>
            <FeatureBoxes features={content.manufacturingFeatures} twoCol />
            <div className={styles.productImage}>
              <Parallax className={styles.parallax} bgImage={productImage} strength={100} />
            </div>
          </div>

          <div className={styles.originalDesign}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.originalDesignHeadline}</h2>
            </header>
            <FeatureBoxes features={content.originalDesignFeatures} />
          </div>
        </div>
      </div>
    );
  }
}
