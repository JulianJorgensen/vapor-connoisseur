import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import Hero from 'components/Herol';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services || {}
}))
export default class ServicesLanding extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero headline={content.headline} intro={content.intro} />
        </div>
        <div className={styles.productImage} style={{backgroundImage: `url(${content.productImage.fields.file.url})`}}></div>
      </div>
    )
  }
}
