import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import bgSmoke from 'assets/images/Homepage_SmokeDARK-Web.png';
import styles from './index.css';

export default class HomepageAbout extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>


        <div className={`${styles.row} ${styles.head}`}>
          <div className={styles.content}>
            <div className={styles.col}>
              <h2>Lorem ipsum</h2>
            </div>
            <div className={styles.col}>
              <span>-</span>
            </div>
          </div>
          <div className={styles.services}>
            <h4>Our services</h4>
          </div>
        </div>

        <div className={`${styles.row} ${styles.body}`}>
          <div className={styles.content}>
            <div className={styles.col}>
              Lorem ipsum
            </div>
            <div className={styles.col}>
              Lorem ipsum
            </div>
          </div>
          <div className={styles.services}>
            <ul className="noBullets">
              <li>Custom design</li>
              <li>Custom design and more</li>
              <li>Custom design</li>
              <li>Custom design</li>
              <li>Custom design</li>
            </ul>
          </div>
        </div>

        <div className={styles.row}>
        <div className={styles.content}>
          <div className={styles.col}>
            Learn more
          </div>
        </div>
        <div className={styles.services}>
          Learn more
        </div>
      </div>


        </div>
        <div className={styles.bgImage}>
          <img src={bgSmoke} />
        </div>
      </div>
    )
  }
}
