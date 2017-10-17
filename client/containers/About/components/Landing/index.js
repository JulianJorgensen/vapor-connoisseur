import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Hero from 'components/hero';

import productImage from 'assets/images/Vapor65130.jpg';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about || {}
}))
export default class AboutLanding extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero headline={content.headline} intro={content.intro} seeMoreText={true} />
        </div>
        <div className={styles.productImage} style={{backgroundImage: `url(${productImage}`}}></div>
      </div>
    )
  }
}
