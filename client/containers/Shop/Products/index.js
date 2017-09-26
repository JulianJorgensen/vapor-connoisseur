import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner';
import Product from './components/Product';
import styles from './index.css';

class Products extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      // trigger parent onLoaded
      this.props.onLoaded();
    }
  }

  render() {
    let {
      products
    } = this.props;

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
      <div className={styles.wrapper}>
        <ul>
          <li><Link to='/shop/all'>all</Link></li>
          <li><Link to='/shop/cartridge'>cartridges</Link></li>
          <li><Link to='/shop/batteries'>batteries</Link></li>
        </ul>
        {renderProducts}
      </div>
    );
  }
}

export default Products;
