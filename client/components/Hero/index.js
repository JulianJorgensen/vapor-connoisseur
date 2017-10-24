import React from 'react';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';
import styles from './index.css';

export default ({
  headline,
  intro,
  seeMoreText,
  preTitle,
  className,
}) => {
  const wrapperStyles = cn(styles.wrapper, className);

  return (
    <div className={wrapperStyles}>
      { preTitle ? <div className={styles.preTitle}>{preTitle}</div> : ''}
      <h1 className={styles.headline}><ReactMarkdown source={headline} /></h1>
      {intro ? <div className={styles.intro}><ReactMarkdown source={intro} /></div> : ''}
      {seeMoreText ? <div className={styles.seeMore}>Scroll to see more</div> : ''}
    </div>
  );
};
