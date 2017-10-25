import React from 'react';
import { HashLink } from 'lib/react-router-hash-link';
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
              <li className={styles.navItem}><HashLink to="#design">Design</HashLink></li>
              <li className={styles.navItem}><HashLink to="#logistics">Logistics</HashLink></li>
              <li className={styles.navItem}><HashLink to="#manufacturing">Manufacturing</HashLink></li>
              <li className={styles.navItem}><HashLink to="#automated-filling">Automated Filling</HashLink></li>
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
