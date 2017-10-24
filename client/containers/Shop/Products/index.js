import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner';
import Product from './components/Product';
import Nav from './components/Nav';
import styles from './index.css';

@withRouter
export default class Products extends Component {
  state = {}

  componentDidMount() {
    this.setProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      // trigger parent onLoaded
      this.props.onLoaded();
    }
  }

  setProducts() {
    const { products } = this.props;

    if (!products) {
      return false;
    }

    const { filter } = this.props.match.params || null;

    if (filter) {
      this.filterProducts(filter, products);
    } else {
      this.setState({
        products,
      });
    }
    return true;
  }

  filterProducts(filter, products) {
    const productsFiltered = products.filter((product) => {
      if (product.productType.toLowerCase() !== filter) {
        return false;
      }
      return true;
    });

    this.setState({
      products: productsFiltered,
    });
  }

  render() {
    const { products } = this.state;

    if (!products) {
      return (
        <div className={styles.container}>
          <LoadingSpinner className={styles.loadingSpinner} />
        </div>
      );
    }

    const renderProducts = products.map(product => (
      <Product
        addVariantToCart={this.props.addVariantToCart}
        checkout={this.props.checkout}
        key={product.id.toString()}
        product={product}
      />
    ));

    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.products}>
          {renderProducts}
        </div>
      </div>
    );
  }
}
