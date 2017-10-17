import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Hero from 'components/Hero';
import productImage from 'assets/images/homeplaceholder.png';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage || {}
}))
export default class HomepageLanding extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero className={styles.hero} preTitle='Vapor Connoisseur' headline={content.headline} intro={content.intro} seeMore={true} />
        </div>
        <div className={styles.productImage} style={{backgroundImage: `url(${productImage})`}}>
          <div className={styles.meta}>XY-05</div>
        </div>
      </div>
    )
  }
}
