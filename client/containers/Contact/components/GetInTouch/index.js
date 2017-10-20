import React from 'react';
import styles from './index.css';

export default class ContactGetInTouch extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.headline}>Get in touch</h1>
            <div className={styles.contactInfo}>
              <div className={styles.col}>
                <p>846.778.2493<br />
                info@vaporconnoisseur</p>
              </div>
              <address className={styles.col}>
                <p>2020 E Main St, Venture<br />
                California, 93001, USA</p>
              </address>
            </div>
          </div>
        </div>      
      </div>
    )
  }
}
