import React, { Component } from 'react';
import Select from 'components/ReactSelect';
import styles from './index.css';

export default class VariantSelector extends Component {
  state = {}

  componentWillMount() {
    this.setVariants();
  }

  setVariants() {
    const variants = [];
    this.props.product.options.map((variant, variantIndex) => {
      // set variant name and object
      variants.push({
        name: variant.name,
        selected: false,
        options: [],
      });

      // set option values for variant
      variant.values.map((option) => {
        variants[variantIndex].options.push({
          variantId: variantIndex,
          variant: variant.name,
          value: option.value,
          label: option.value,
        });
        this.setState({ variants });
        return true;
      });
      return true;
    });
  }

  handleOptionChange(newOption) {
    // update the variant state
    const { variants } = this.state;
    variants[newOption.variantId].selected = true;
    this.setState({ variants });

    // trigger parent handler
    this.props.handleOptionChange(newOption);
  }

  render() {
    const { variants } = this.state;
    const { selectedVariant } = this.props;

    if (!variants) {
      return null;
    }

    return (
      <div className={styles.container}>
        {variants.map((variant, i) => (
          <div
            key={variant.id}
            className={styles.wrapper}
          >
            {variant.name}
            <Select
              className={styles.option}
              name={variant.name}
              value={variant.selected ? selectedVariant.selectedOptions[i].value : null}
              options={variant.options}
              clearable={false}
              onChange={this.handleOptionChange}
            />
          </div>
        ))}
      </div>
    );
  }
}
