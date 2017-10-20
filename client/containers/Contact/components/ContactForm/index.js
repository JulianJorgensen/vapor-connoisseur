import React from 'react';
import styles from './index.css';

export default class ContactContactForm extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h2 className={styles.headline}>Send us a note.</h2>
            Contact form
          </div>
        </div>      
      </div>
    )
  }
}
