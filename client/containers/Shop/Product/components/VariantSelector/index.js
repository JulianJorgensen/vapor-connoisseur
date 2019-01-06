import React, { Component } from 'react';
import Select from 'components/ReactSelect';
import styles from './index.css';

export default class VariantSelector extends Component {
  constructor() {
    super();

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

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

    // detect if all options have been selected
    const selectedVariantsCount = variants.filter((variant) => {
      if (!variant.selected) return false;
      return true;
    }).length;
    if (selectedVariantsCount === variants.length) {
      this.props.handleAllOptionsSelected();
    }
  }

  render() {
    const { variants } = this.state;
    const { selectedVariant } = this.props;

    if (!variants || !selectedVariant) return false;

    return (
      <div className={styles.wrapper}>
        {variants.map((variant, i) => (
          <div
            key={variant.name}
            className={styles.select}
          >
            <Select
              className={styles.option}
              name={variant.name}
              value={variant.selected ? selectedVariant.selectedOptions[i].value : null}
              options={variant.options}
              placeholder={variant.name}
              clearable={false}
              onChange={this.handleOptionChange}
            />
          </div>
        ))}
      </div>
    );
  }
}
