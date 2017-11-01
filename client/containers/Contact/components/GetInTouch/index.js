import React from 'react';
import Hero from 'components/Hero';
import styles from './index.css';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Hero headline="Get in touch" />
      <div className={styles.contactInfo}>
        <div className={styles.col}>
          <p>
            <phone>846.778.2493</phone><br />
            <a href="mailto:info@vaporconnoisseur.com">info@vaporconnoisseur.com</a>
          </p>
        </div>
        <address className={styles.col}>
          <p>
            2020 E Main St, Ventura<br />
            California, 93001, USA
          </p>
        </address>
      </div>
    </div>
  </div>
);
