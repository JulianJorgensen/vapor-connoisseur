import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';
import Footer from 'layout/Footer';
import PageCTAs from 'components/PageCTAs';
import Landing from './components/Landing';
import Design from './components/Design';
import Manufacturing from './components/Manufacturing';
import Logistics from './components/Logistics';
import AutomatedFilling from './components/AutomatedFilling';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.services,
}))
export default class Services extends Component {
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
        <Landing />
        <Design />
        <Manufacturing />
        <Logistics />
        <AutomatedFilling />
        <PageCTAs />
        <Footer />
      </div>
    );
  }
}
