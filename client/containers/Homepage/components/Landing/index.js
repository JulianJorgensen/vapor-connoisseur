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
            <p>Vapor Connoisseur leads by design, building the industry's finest vaporizers.</p>
          </div>
          <div className={styles.cta}>Scroll to discover</div>
        </div>
        <div className={styles.productImage}>
          <img src='http://placehold.it/700x900/393F46' />
          <div className={styles.meta}>XY-05</div>
        </div>
      </div>
    )
  }
}
