import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Desktop, MobileTablet } from 'utils/responsive';
import Hero from 'components/Hero';
import productImage from 'assets/images/homeProduct.jpg';
import productImageMobile from 'assets/images/XY05_EXPLO1.jpg';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage || {}
}))
export default class HomepageLanding extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero className={styles.hero} preTitle="Vapor Connoisseur" headline={content.headline} intro={content.intro} seeMore />
        </div>
        <Desktop>
          <div className={styles.productImage} style={{ backgroundImage: `url(${productImage})` }}>
            <div className={styles.meta}>XY-05</div>
          </div>
        </Desktop>
        <MobileTablet>
          <div className={styles.productImage} style={{ backgroundImage: `url(${productImageMobile})` }}>
            <div className={styles.meta}>XY-05</div>
          </div>
        </MobileTablet>
      </div>
    );
  }
}
