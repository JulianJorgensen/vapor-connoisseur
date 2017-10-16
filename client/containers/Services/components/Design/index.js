import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {}
}))
export default class ServicesDesign extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.section2}>
            <h2>{content.designHeadline}</h2>
            <ReactMarkdown source={content.designBody} />
          </div>

          <div className={styles.features}>
            {content.designFeatures.map((feature) => {
              return (
                <div className={styles.feature}>
                  <h3>{feature.fields.title}</h3>
                  <ReactMarkdown source={feature.fields.body} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
