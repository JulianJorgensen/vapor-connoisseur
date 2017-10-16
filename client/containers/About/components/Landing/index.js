import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about || {}
}))
export default class AboutLanding extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.headline}>{content.headline}</h1>
            <div><ReactMarkdown source={content.intro} /></div>
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
