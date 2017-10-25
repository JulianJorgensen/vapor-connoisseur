import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import Button from 'components/Button';
import productImage from 'assets/images/homeProductBox.jpg';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage
}))
export default class HomepageSamples extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.leftBox}>
            <div className={styles.content}>
              <h2 className={styles.headline}>{content.sampleKitsHeadline}</h2>
              <div className={styles.intro}><ReactMarkdown source={content.sampleKitsBody} /></div>
              <Button className={styles.cta} href="/sample-kits" label="Learn more" />
            </div>
          </div>
          <div className={styles.rightBox} style={{ backgroundImage: `url(${productImage}` }} />
        </div>
      </div>
    );
  }
}
