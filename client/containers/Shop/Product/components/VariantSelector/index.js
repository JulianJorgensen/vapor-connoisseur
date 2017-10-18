import React, {Component} from 'react';
import Select from 'components/ReactSelect';
import styles from './index.css';

class VariantSelector extends Component {
  state = {}

  setVariants() {
    let variants = [];
    this.props.product.options.map((variant, variantIndex) => {
      // set variant name and object
      variants.push({
        name: variant.name,
        selected: false,
        options: []
      });

      // set option values for variant
      variant.values.map((option, i) => {
        variants[variantIndex].options.push({
          variantId: variantIndex,
          variant: variant.name,
          value: option.value,
          label: option.value
        });
      });
    });
    this.setState({variants});
  }

  componentWillMount() {
    this.setVariants();
  }

  handleOptionChange(newOption) {
    // update the variant state
    let variants = this.state.variants;
    variants[newOption.variantId].selected = true;
    this.setState({variants});

    // trigger parent handler
    this.props.handleOptionChange(newOption);
  }

  render() {
    let { variants } = this.state;
    let { selectedVariant } = this.props;

    if (!variants) {
      return null;
    }

    return (
      <div className={styles.container}>
        {variants.map((variant, i) => {
          return (
            <div
              key={i}
              className={styles.wrapper}
            >
              {variant.name}
              <Select
                className={styles.option}
                name={variant.name}
                value={variant.selected ? selectedVariant.selectedOptions[i].value : null}
                options={variant.options}
                clearable={false}
                onChange={this.handleOptionChange.bind(this)}
              />
            </div>
          )
        })}
      </div>
    );
  }
}

export default VariantSelector;
