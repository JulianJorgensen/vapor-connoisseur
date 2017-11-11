import React from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';
import Footer from 'layout/Footer';
import GetInTouch from './components/GetInTouch';
import Questionnaire from './components/Questionnaire';
import ContactForm from './components/ContactForm';
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
      );
    }
    return (
      <div className={styles.wrapper}>
        <div className={`${styles.inner} animatedSection`}>
          <GetInTouch />
          <ContactForm />
          <Questionnaire />
        </div>
        <Footer />
      </div>
    );
  }
}
