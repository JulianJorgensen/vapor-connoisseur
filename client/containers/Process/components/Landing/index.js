import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Button from 'components/Button';
import productImage from 'assets/images/GENIECL-Angle2-24.png';
import Hero from 'components/Hero';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway || {}
}))
export default class CustomerPathwayLanding extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero headline={content.headline} />

          <div className={styles.productImage} style={{ backgroundImage: `url(${productImage})` }} />

          <div className={styles.introWrapper}>
            <div className={styles.intro}>
              <h2 className={styles.introHeadline}>{content.introHeadline}</h2>
              <div><ReactMarkdown source={content.introBody} /></div>
            </div>
          </div>
        </div>

        <div className={styles.aside}>
          <h2 className={styles.asideTitle}>{content.introAsideTitle}</h2>
          <div className={styles.asideBody}><ReactMarkdown source={content.introAsideBody} /></div>
          <Button href="/contact" label="Request a catalogue" />
        </div>
      </div>
    );
  }
}
