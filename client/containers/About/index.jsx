import React from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';
import Footer from 'layout/Footer';
import Landing from './components/Landing';
import Sustainability from './components/Sustainability';
import Services from './components/Services';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about,
}))
export default class About extends React.Component {
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
        <Sustainability />
        <Services />
        <Footer />
      </div>
    );
  }
}
