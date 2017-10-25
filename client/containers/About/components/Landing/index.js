import React from 'react';
import { connect } from 'react-redux';
import Hero from 'components/Hero';
import productImage from 'assets/images/Vapor65149.jpg';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about || {},
}))
export default class AboutLanding extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero headline={content.headline} intro={content.intro} seeMore />
        </div>
        <div className={styles.productImage} style={{ backgroundImage: `url(${productImage}` }} />
      </div>
    );
  }
}
