import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
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
            <h2>{content.sampleKitsHeadline}</h2>
            <ReactMarkdown source={content.sampleKitsBody} />
            <p>Learn more</p>
          </div>
          <div className={styles.rightBox}>
          </div>
        </div>
      </div>
    )
  }
}
