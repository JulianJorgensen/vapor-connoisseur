import React from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';
import Footer from 'layout/Footer';
import PageCTAs from 'components/PageCTAs';
import Landing from './components/Landing';
import Samples from './components/Samples';
import ProductDevelopment from './components/ProductDevelopment';
import ProductCustomization from './components/ProductCustomization';
import Production from './components/Production';
import Shipping from './components/Shipping';
import Duties from './components/Duties';
import ProductDelivery from './components/ProductDelivery';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.customerPathway,
}))
export default class Process extends React.Component {
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
          <Samples />
          <ProductDevelopment />
          <ProductCustomization />
          <Production />
          <Shipping />
          <Duties />
          <ProductDelivery />
          <PageCTAs />
        </div>
        <Footer />
      </div>
    );
  }
}
