import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import LogoSVG from 'assets/icons/logo.svg';
import styles from './index.css';

export default ({ className, ...others }) => {
  const containerStyles = cn(className, styles.logo);
  return (
    <Link to="/">
      <LogoSVG
        className={containerStyles}
        {...others}
      />
    </Link>
  );
};
