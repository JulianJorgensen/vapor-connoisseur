import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeatureBoxes from 'components/FeatureBoxes';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class ProcessDuties extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.dutiesHeadline}</h2>
          </header>

          <FeatureBoxes features={content.dutiesFeatures} />
        </div>
      </div>
    );
  }
}
