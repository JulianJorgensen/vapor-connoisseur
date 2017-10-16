import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import bgSmoke from 'assets/images/Homepage_SmokeDARK-Web.png';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage
}))
export default class HomepageAbout extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>

        <div className={`${styles.row} ${styles.head}`}>
          <div className={styles.content}>
            <div className={styles.col}>
              <h2>{content.aboutHeadline}</h2>
            </div>
            <div className={styles.col}>
              <span>-</span>
            </div>
          </div>
          <div className={styles.services}>
            <h4>{content.servicesHeadline}</h4>
          </div>
        </div>

        <div className={`${styles.row} ${styles.body}`}>
          <div className={styles.content}>
            <div className={styles.col}>
              <ReactMarkdown source={content.aboutBody} /> 
            </div>
          </div>
          <div className={styles.services}>
            <ReactMarkdown source={content.servicesBody} />            
          </div>
        </div>

        <div className={styles.row}>
        <div className={styles.content}>
          <div className={styles.col}>
            Learn more
          </div>
        </div>
        <div className={styles.services}>
          Learn more
        </div>
      </div>


        </div>
        <div className={styles.bgImage}>
          <img src={bgSmoke} />
        </div>
      </div>
    )
  }
}
