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

  setCategories() {
    const { products } = this.props;
    const categories = [{
      label: 'All products',
      value: '',
    }];
    products.map((product) => {
      if (!categories.find(category => category.label === product.productType)) {
        categories.push({
          label: product.productType,
          value: product.productType.toLowerCase(),
        });
      }
      return true;
    });
    this.setState({ categories });
  }

  setProducts() {
    const { products } = this.props;
    const { filter } = this.props.match.params || null;

    if (filter) {
      this.filterProducts(filter, products);
    } else {
      this.setState({
        products,
      });
    }

    this.setCategories();
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
    const { products, categories } = this.state;

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
        <Nav categories={categories} active={this.props.match.params.filter} />
        <div className={styles.products}>
          {renderProducts}
        </div>
        <div className={styles.scroll}>Scroll</div>
      </div>
    );
  }
}
