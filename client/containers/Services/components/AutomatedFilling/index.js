import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {},
}))
export default class ServicesAutomatedFilling extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.headline}>{content.automatedFillingHeadline}</h2>
            <div className={styles.intro}>
              <ReactMarkdown source={content.automatedFillingBody} />
            </div>
          </header>
        </div>
      </div>
    );
  }
}
