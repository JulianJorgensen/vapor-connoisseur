import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoadingSpinner from 'components/LoadingSpinner';
import Footer from 'layout/Footer';

import Landing from './components/Landing';
import Sustainability from './components/Sustainability';
import Services from './components/Services';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about
}))
export default class About extends React.Component {
  render() {
    if (!this.props.content) {
      return <LoadingSpinner />
    }
    return (
      <div className={styles.wrapper}>
        <Landing />
        <Sustainability />
        <Services />
        <Footer />
      </div>
    )
  }
}
