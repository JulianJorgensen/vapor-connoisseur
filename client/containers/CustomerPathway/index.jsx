import React from 'react';
import { connect } from 'react-redux';

import LoadingSpinner from 'components/LoadingSpinner';

import Footer from 'layout/Footer';
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
  content: site.content.customerPathway
}))
export default class CustomerPathway extends React.Component {
  render() {
    if (!this.props.content) {
      return <LoadingSpinner />
    }
    return (
      <div className={styles.wrapper}>
        <Landing />
        <Samples />
        <ProductDevelopment />
        <ProductCustomization />
        <Production />
        <Shipping />
        <Duties />
        <ProductDelivery />
        <Footer />
      </div>
    )
  }
}
