import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Plx from 'react-plx';
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
        <Plx
          className={styles.bgImage}
          parallaxData={ [
            {
              start: 0,
              duration: 'height',
              offset: 300,
              name: 'first',
              properties: [
                {
                  startValue: 0.7,
                  endValue: 1,
                  property: 'opacity',
                },
                {
                  startValue: -30,
                  endValue: -20,
                  unit: '%',
                  property: 'translateY',
                },
              ],
            },
          ]}
        >
          <SmokeBg />
        </Plx>
      </div>
    );
  }
}
