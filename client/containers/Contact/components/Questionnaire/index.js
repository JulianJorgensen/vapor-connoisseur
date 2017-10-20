import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.contact || {}
}))
export default class ContactQuestionnaire extends React.Component {
  render() {
    let { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h2 className={styles.headline}><ReactMarkdown source={content.questionnaireHeadline} /></h2>
            <div className={styles.intro}><ReactMarkdown source={content.questionnaireIntro} /></div>
          </div>
        </div>
      </div>
    )
  }
}
