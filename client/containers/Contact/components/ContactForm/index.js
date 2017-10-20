import React from 'react';
import { connect } from 'react-redux';

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
    label: 'Phone number',
    name: 'phone',
    type: 'phone'
  },
  {
    label: 'Message',
    name: 'message',
    multiline: true,
    rows: 3
  }
];

export default class ContactContactForm extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h2 className={styles.headline}>Send us a note.</h2>
            <Form 
              formFields={formFields}
              submitLabel='Send message'
              formName='contactForm'
              subject='Message'
            />
          </div>
        </div>      
      </div>
    )
  }
}
