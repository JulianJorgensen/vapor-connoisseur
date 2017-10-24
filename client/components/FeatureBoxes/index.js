import React from 'react';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';

import styles from './index.css';

export default ({ features, className, ...others }) => {
  const wrapperStyles = cn(styles.wrapper, className, {
    [styles.oneCol]: others.oneCol,
    [styles.twoCol]: others.twoCol,
  });

  const renderFeatures = features.map(feature => (
    <div key={feature.sys.id} className={styles.box}>
      <h3 className={styles.title}>{feature.fields.title}</h3>
      <div className={styles.body}><ReactMarkdown source={feature.fields.body} /></div>
    </div>
  ));

  return (
    <div className={wrapperStyles}>
      {renderFeatures}
    </div>
  );
};
