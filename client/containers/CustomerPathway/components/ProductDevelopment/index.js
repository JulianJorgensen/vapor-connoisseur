import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class CustomerPathwayProductDevelopment extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2>{content.productDevelopmentHeadline}</h2>

          <div><img src={content.productDevelopmentImage.fields.file.url} /></div>
          <div className={styles.features}>
            {content.productDevelopmentFeatures.map((feature) => {
              return (
                <div className={styles.feature}>
                  <h3>{feature.fields.title}</h3>
                  <p>{feature.fields.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
