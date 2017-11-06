import React from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';
import styles from './index.css';

export default ({
  meta,
  input,
  ...others
}) => {
  return (
    <div>
      <Checkbox
        theme={styles}
        {...input}
        {...others}
      />
    </div>
  );
};
