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
  },
  {
    label: 'Specific requests (check all that apply)',
    type: 'group',
    styles: styles.checkboxes,
    fields: [
      {
        label: 'Glass cartridges only',
        name: 'glassCartridgesOnly',
        type: 'checkbox',
      },
      {
        label: 'Ceramic heating element',
        name: 'ceramicHeatingElement',
        type: 'checkbox',
      },
      {
        label: 'Preheating battery',
        name: 'preheatingBattery',
        type: 'checkbox',
      },
      {
        label: 'Bottom airflow',
        name: 'bottomAirflow',
        type: 'checkbox',
      },
      {
        label: 'Adjustable top airflow',
        name: 'adjustableTopAirflow',
        type: 'checkbox',
      },
      {
        label: 'Wax/shatter products',
        name: 'waxShatterProducts',
        type: 'checkbox',
      },
      {
        label: 'Packaging',
        name: 'packaging',
        type: 'checkbox',
      },
      {
        label: 'Glass synringes',
        name: 'glassSyringes',
        type: 'checkbox',
      },
      {
        label: 'Disposable Vapes',
        name: 'disposableVapes',
        type: 'checkbox',
      },
    ],
  },
  {
    label: 'Upload logo',
    name: 'logo',
    type: 'upload',
  },
];

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
            <h3 className={styles.headline}>
              <ReactMarkdown source={content.requestFormHeadline} />
            </h3>
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
