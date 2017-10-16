import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage || {}
}))
export default class HomepageLanding extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.company}>Vapor Connoisseur</div>
            <h1 className={styles.headline}>{content.headline}</h1>
            <p>{content.intro}</p>
          </div>
          <div className={styles.cta}>{content.ctaText}Scroll to discover</div>
        </div>
        <div className={styles.productImage}>
          <img src={content.productImage.fields.file.url || 'http://placehold.it/900x900'} />
          <div className={styles.meta}>XY-05</div>
        </div>
      </div>
    )
  }
}
