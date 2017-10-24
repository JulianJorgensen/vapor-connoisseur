import React from 'react';
import Select from 'react-select';
import cn from 'classnames';
import styles from './index.css';

export default ({ className, ...others }) => {
  const wrapperStyles = cn(styles.wrapper, className);

  return (
    <Select
      className={wrapperStyles}
      {...others}
    />
  );
};
