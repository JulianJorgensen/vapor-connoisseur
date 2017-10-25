import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.contactCol}>
        <h2 className={styles.headline}>Contact Vapor Connoisseur</h2>
        <Button label="Send us a message" href="/contact" />
      </div>

      <div className={styles.sampleKitCol}>
        <h2 className={styles.headline}>Complimentary Sample Kit</h2>
        <Button label="Request a kit" href="/sample-kits" />
      </div>
    </div>
  </div>
);
