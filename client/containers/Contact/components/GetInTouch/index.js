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
            <phone>877.330.0370</phone><br />
            <a href="mailto:info@vaporconnoisseur.com">info@vaporconnoisseur.com</a>
          </p>
        </div>
        <address className={styles.col}>
          <p>
          1755 E. Palm Canyon Dr., Suite 110-261<br />
          Palm Springs, CA 92264
          </p>
        </address>
      </div>
    </div>
  </div>
);
