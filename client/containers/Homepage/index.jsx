import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';
import Footer from 'layout/Footer';

import Landing from './components/Landing';
import About from './components/About';
import Technology from './components/Technology';
import Samples from './components/Samples';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage,
}))
export default class Homepage extends Component {
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
        <div className="animatedSection">
          <Landing />
          <About />
          <Technology />
          <Samples />
        </div>
        <Footer />
      </div>
    );
  }
}
