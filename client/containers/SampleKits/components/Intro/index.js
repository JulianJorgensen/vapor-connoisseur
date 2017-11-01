import React from 'react';
import ReactMarkdown from 'react-markdown';
import Hero from 'components/Hero';
import styles from './index.css';

export default ({ content }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Hero headline="Sample Kits" intro={content.intro} />
    </div>
  </div>
);
