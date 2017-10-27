import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import Button from 'components/Button';
import bgSmoke from 'assets/images/VC_BGSmoke4.png';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage,
}))
export default class HomepageAbout extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.primaryCol}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.aboutHeadline}</h2>
            </header>
            <div className={styles.body}>
              <ReactMarkdown source={content.aboutBody} />
            </div>
            <Button href="/services" label="Learn more" />
          </div>

          <div className={styles.services}>
            <header className={styles.header}>
              <h2 className={styles.headline}>{content.servicesHeadline}</h2>
            </header>
            <div className={styles.body}>
              <ReactMarkdown source={content.servicesBody} />
            </div>
            <Button href="/services" label="Learn more" />
          </div>
        </div>

        <div className={styles.bgImage}>
          <img src={bgSmoke} alt="" />
        </div>
      </div>
    );
  }
}
