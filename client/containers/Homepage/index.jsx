import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';

import Landing from './components/Landing';
import About from './components/About';
import Technology from './components/Technology';
import Samples from './components/Samples';
import Footer from 'layout/Footer';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage
}))
export default class Homepage extends React.Component {
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
        <Landing />
        <About />
        <Technology />
        <Samples />
        <Footer />
      </div>
    )
  }
}
