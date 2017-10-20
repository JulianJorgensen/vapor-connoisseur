import React, { PropTypes } from 'react'
import cn from 'classnames';
import Input from 'react-toolbox/lib/input';
import styles from './index.css';

const renderField = ({ className, meta, input, ...others }) => {
  const _className = cn(className, styles.default);
  return (
    <div>
      <Input
        className={_className}
        theme={styles}
        error={ meta.touched && meta.error }
        {...input}
        {...others}
      />
    </div>
  )
}
export default renderField
