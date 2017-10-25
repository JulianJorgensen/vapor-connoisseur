import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Form from 'components/Form';
import styles from './index.css';

const formFields = [
  {
    label: 'Your name',
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
  },
  {
    label: 'City & State',
    name: 'cityAndState'
  },
  {
    label: 'Phone Number',
    name: 'phone',
    type: 'phone'
  },
  {
    label: 'Extraction Process',
    name: 'extractionProcess'
  },
  {
    label: 'Post Processing',
    name: 'postProcessing'
  }
];

@connect(({ site }) => ({
  content: site.content.contact || {}
}))
export default class ContactQuestionnaire extends Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h3 className={styles.headline}><ReactMarkdown source={content.questionnaireHeadline} /></h3>
            <div className={styles.intro}><ReactMarkdown source={content.questionnaireIntro} /></div>
            <Form
              formFields={formFields}
              submitLabel="Send message"
              formName="questionnaire"
              subject="Client questionaire"
            />
          </div>
        </div>
      </div>
    );
  }
}
