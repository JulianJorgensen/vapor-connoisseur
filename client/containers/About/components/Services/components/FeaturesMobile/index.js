import React from 'react';
import Accordion from 'components/Accordion';
import styles from './index.css';

export default ({ features }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Accordion className={styles.accordion}>
        {features.map(feature => (
          <div
            key={feature.sys.id}
            className={styles.wrapper}
          >
            <div>{feature.fields.title}</div>
            <div>{feature.fields.body}</div>
          </div>
        ))}
      </Accordion>
    </div>
  </div>
);
