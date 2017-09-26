import React, {Component} from 'react';
import styles from './index.css';

class VariantSelector extends Component {
  render() {
    let { product } = this.props;

    let variantSelectors = product.options.map((option, i) => {
      return (
       <select
          key={i}
          className={styles.option}
          name={option.name}
          onChange={this.props.handleOptionChange}
        >
          {option.values.map((value, i) => {
            return (
              <option value={value} key={i}>{`${value}`}</option>
            )
          })}
        </select>
      );
    });

    return (
      <div className={styles.container}>
        {variantSelectors}
      </div>
    );
  }
}

export default VariantSelector;
