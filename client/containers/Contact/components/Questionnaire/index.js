import React from 'react';
import {reset} from 'redux-form';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import Form from 'components/Form';
import styles from './index.css';

let formFields = [
  {
    label: 'Full name',
    name: 'name',
    required: true
  },
  {
    label: 'Your email',
    name: 'email',
    type: 'email',
    required: true
  },
  {
    label: 'Business name',
    name: 'business'
  }
];

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
            <Form 
              formFields={formFields}
              submitLabel='Send message'
              formName='questionnaire'
              subject='Client questionaire'
            />
          </div>
        </div>
      </div>
    )
  }
}
