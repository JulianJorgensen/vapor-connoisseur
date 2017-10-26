import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import Button from 'components/Button';
import productExploded from 'assets/images/XY05_EXPLO1-24.png';
import productExploded2 from 'assets/icons/VC_XY05_Outline-02.svg';
import ImageBeforeAfter from './components/ImageBeforeAfter';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage,
}))
export default class HomepageTechnology extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.graphicCol}>
            <ImageBeforeAfter
              before={productExploded}
              after={productExploded2}
            />
          </div>

          <div className={styles.process}>
            <h2 className={styles.headline}>{content.customerPathwayHeadline}</h2>
            <div className={styles.intro}><ReactMarkdown source={content.customerPathwayBody} /></div>
            <Button href="/process" label="Learn more" />
          </div>
        </div>
      </div>
    );
  }
}
