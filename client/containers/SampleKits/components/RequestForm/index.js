import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Form from 'components/Form';
import styles from './index.css';

const formFields = [
{
  label: 'Your name',
  name: 'name',
  required: true,
},
{
  label: 'Your email',
  name: 'email',
  type: 'email',
  required: true,
},
{
  label: 'Business name',
  name: 'business',
},
{
  label: 'Business address',
  name: 'businessAddress',
},
{
  label: 'Phone Number',
  name: 'phone',
  type: 'phone',
},
{
  label: 'Extraction Process',
  name: 'extractionProcess',
},
{
  label: 'Post Processing',
  name: 'postProcessing',
}];

@connect(({ site }) => ({
  content: site.content.sampleKits || {},
}))
export default class SampleKitsRequestForm extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h2 className={styles.headline}>
              <ReactMarkdown source={content.requestFormHeadline} />
            </h2>
            <div className={styles.intro}>
              <ReactMarkdown source={content.requestFormIntro} />
            </div>
            <Form
              formFields={formFields}
              submitLabel="Send message"
              formName="sampleRequest"
              subject="Sample Kit Request"
            />
          </div>
        </div>
      </div>
    );
  }
}
