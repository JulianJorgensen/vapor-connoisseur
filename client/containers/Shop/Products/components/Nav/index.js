import React, { Component } from 'react';
import Select from 'components/ReactSelect';
import { Link, withRouter } from 'react-router-dom';
import { Desktop, MobileTablet } from 'utils/responsive';
import styles from './index.css';

@withRouter
export default class ProductsNav extends Component {
  state = {};

  handleCategoryChange(newCategory) {
    this.props.history.push(`/shop/${newCategory.value}`);
  }

  render() {
    const { categories, active } = this.props;
    return (
      <div>
        <Desktop>
          <ul className={styles.wrapper}>
            {categories.map(category => (
              <li><Link to={`/shop/${category.value}`}>{category.label}</Link></li>
            ))}
          </ul>
        </Desktop>
        <MobileTablet>
          <Select
            className={styles.option}
            name="productTypes"
            value={active || ''}
            options={categories}
            clearable={false}
            onChange={val => this.handleCategoryChange(val)}
          />
        </MobileTablet>
      </div>
    );
  }
}
