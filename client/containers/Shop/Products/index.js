import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner';
import Product from './components/Product';
import styles from './index.css';

@withRouter
class Products extends Component {
  state = {}

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      // trigger parent onLoaded
      this.props.onLoaded();
    }
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts() {
    let { products } = this.props;
    
    if (!products) {
      return false;
    }
    
    let { filter } = this.props.match.params || null;

    if (filter) {
      this.filterProducts(filter, products);
    }else{
      this.setState({
        products: this.props.products        
      });
    }
  }

  filterProducts(filter, products) {    
    let productsFiltered = products.filter((product) => {
      if (product.productType.toLowerCase() !== filter) {
        return false;
      }
      return true;
    });

    this.setState({
      products: productsFiltered
    });
  }

  render() {
    let { products } = this.state;

    if (!products) {
      return (
        <LoadingSpinner />
      )
    }

    let renderProducts = products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          checkout={this.props.checkout}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
      <div className={styles.container}>
        <ul className={styles.nav}>
          <li><Link to='/shop'>all</Link></li>
          <li><Link to='/shop/cartridge'>cartridges</Link></li>
          <li><Link to='/shop/battery'>batteries</Link></li>
        </ul>
        <div className={styles.products}>
          {renderProducts}
        </div>
      </div>
    );
  }
}

export default Products;
