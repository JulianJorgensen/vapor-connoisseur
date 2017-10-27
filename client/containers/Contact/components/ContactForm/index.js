import React from 'react';
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
    label: 'Phone number',
    name: 'phone',
    type: 'phone',
  },
  {
    label: 'Your message',
    name: 'message',
    multiline: true,
    rows: 3,
  },
];

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.inner}>
        <h3 className={styles.headline}>Send us a note.</h3>
        <Form
          formFields={formFields}
          submitLabel="Send message"
          formName="contactForm"
          subject="Message"
        />
      </div>
    </div>
  </div>
);
