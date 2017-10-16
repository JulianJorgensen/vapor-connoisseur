import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about || {}
}))
export default class AboutSustainability extends Component {
  render() {
    let { content } = this.props;
    console.log('content', content);
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.sustainabilityHeadline}</h2>
            <div><ReactMarkdown source={content.sustainabilityIntro} /></div>
          </header>

          <div className={styles.boxes}>
            {content.sustainabilityFeatures.map((feature) => {
              return (
                <div className={styles.box}>
                  <h3>{feature.fields.title}</h3>
                  <div>{feature.fields.body}</div>
                </div>
              )
            })}
          </div>

          <div className={styles.middleImage} style={{backgroundImage: `url(${content.middleImage.fields.file.url})`}}></div>
        </div>
      </div>
    )
  }
}
