import React from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';

import GetInTouch from './components/GetInTouch';
import Questionnaire from './components/Questionnaire';
import ContactForm from './components/ContactForm';
import Footer from 'layout/Footer';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.contact
}))
export default class Contact extends React.Component {
  render() {
    if (!this.props.content) {
      return (
        <div className={styles.wrapper}>
          <LoadingSpinner />
        </div>
      )
    }
    return (
      <div className={styles.wrapper}>
        <GetInTouch />
        <ContactForm />
        <Questionnaire />
        <Footer />
      </div>
    )
  }
}
