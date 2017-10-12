import React from 'react';
import styles from './index.css';

export default class HomepageSamples extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.leftBox}>
            <h2>Sample kits</h2>
            <p>Lorem ipsum</p>
            Learn more
          </div>
          <div className={styles.rightBox}>
          </div>
        </div>
      </div>
    )
  }
}
