import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class CustomerPathwayLanding extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>{content.headline}</h1>

          <div className={styles.productImage}>
            <img src={content.productImage1.fields.file.url} />
            <div className={styles.meta}>XY-05</div>
          </div>


          <div className={styles.intro}>
            <h2 className={styles.introHeadline}>{content.introHeadline}</h2>
            <div><ReactMarkdown source={content.introBody} /></div>
          </div>

          <div className={styles.aside}>
            <h2 className={styles.asideTitle}>{content.introAsideTitle}</h2>
            <div><ReactMarkdown source={content.introAsideBody} /></div>
          </div>
        
        </div>
      </div>
    )
  }
}
