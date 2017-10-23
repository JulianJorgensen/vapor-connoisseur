import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'components/Button';

import bgSmoke from 'assets/images/Homepage_SmokeDARK-Web.png';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage
}))
export default class HomepageAbout extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.primaryCol}>
            <h2 className={styles.headline}>{content.aboutHeadline}</h2>
            <div className={styles.body}>
              <ReactMarkdown source={content.aboutBody} /> 
            </div>
            <Button href='/services' label='Learn more' />
          </div>

          <div className={styles.services}>
            <h2 className={styles.headline}>{content.servicesHeadline}</h2>
            <div className={styles.body}>            
              <ReactMarkdown source={content.servicesBody} />
            </div>
            <Button href='/services' label='Learn more' />          
          </div>
        </div>

        <div className={styles.bgImage}>
          <img src={bgSmoke} />
        </div>
      </div>
    )
  }
}
