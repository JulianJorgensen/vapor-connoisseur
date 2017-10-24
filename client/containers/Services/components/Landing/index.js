import React from 'react';
import { connect } from 'react-redux';
import Hero from 'components/Hero';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {},
}))
export default class ServicesLanding extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero headline={content.headline} intro={content.intro} />
          <div className={styles.nav}>
            <div className={styles.navTitle}>Jump to a section</div>
            <ol className={styles.navItems}>
              <li className={styles.navItem}>Design</li>
              <li className={styles.navItem}>Logistics</li>
              <li className={styles.navItem}>Manufacturing</li>
              <li className={styles.navItem}>Automated Filling</li>
            </ol>
          </div>
        </div>
        <div className={styles.productImage} style={{ backgroundImage: `url(${content.productImage.fields.file.url})` }}>
          <div className={styles.meta}>Scroll to discover</div>
        </div>
      </div>
    );
  }
}
