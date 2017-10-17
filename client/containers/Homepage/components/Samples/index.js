import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';

import Button from 'components/Button';
import productImage from 'assets/images/placeholder2.png';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage
}))
export default class HomepageSamples extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.leftBox}>
            <div className={styles.content}>
              <h2>{content.sampleKitsHeadline}</h2>
              <ReactMarkdown source={content.sampleKitsBody} />
              <Button href='/sample-kits' label='Learn more' />
            </div>
          </div>
          <div className={styles.rightBox} style={{backgroundImage: `url(${productImage}`}}></div>
        </div>
      </div>
    )
  }
}
