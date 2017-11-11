import React from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';
import Footer from 'layout/Footer';
import Intro from './components/Intro';
import ProductImages from './components/ProductImages';
import RequestForm from './components/RequestForm';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.sampleKits,
}))
export default class SampleKits extends React.Component {
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
          <Intro content={this.props.content} />
          <ProductImages />
          <RequestForm />
        </div>
        <Footer />
      </div>
    );
  }
}
