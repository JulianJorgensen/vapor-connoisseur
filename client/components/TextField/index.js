import React from 'react';
import cn from 'classnames';
import Input from 'react-toolbox/lib/input';
import styles from './index.css';

export default ({
  className,
  meta,
  input,
  ...others
}) => {
  const containerStyles = cn(className, styles.default);
  return (
    <div>
      <Input
        className={containerStyles}
        theme={styles}
        error={meta.touched && meta.error}
        {...input}
        {...others}
      />
    </div>
  );
};
