import React from 'react';
import cn from 'classnames';
import { CubeGrid } from 'better-react-spinkit';
import styles from './index.css';

export default ({ className }) => {
  const containerStyles = cn(styles.container, className);
  return (
    <div className={containerStyles}>
      <CubeGrid size={50} />
    </div>
  );
};
