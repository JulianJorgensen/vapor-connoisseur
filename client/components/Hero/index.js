import React from 'react';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';
import styles from './index.css';

export default ({
  headline,
  intro,
  seeMore,
  preTitle,
  className,
  headlineClassName,
}) => {
  const wrapperStyles = cn(styles.wrapper, className);
  const headlineStyles = cn(styles.headline, headlineClassName);
  return (
    <div className={wrapperStyles}>
      { preTitle ? <div className={styles.preTitle}>{preTitle}</div> : ''}
      <h1 className={headlineStyles}><ReactMarkdown source={headline} /></h1>
      {intro ? <div className={styles.intro}><ReactMarkdown source={intro} /></div> : ''}
      {seeMore ? <div className={styles.seeMore}>Scroll to learn more</div> : ''}
    </div>
  );
};
