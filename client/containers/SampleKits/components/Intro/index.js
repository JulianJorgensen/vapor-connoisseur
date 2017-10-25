import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './index.css';

export default ({ content }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.headline}>{content.headline}</h1>
        <ReactMarkdown source={content.intro} />
      </div>
    </div>
  </div>
);
