import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import LogoSVG from '-!svg-react-loader?name=Icon!assets/icons/logo.svg';
import styles from './index.css';

const Logo = ({ className, ...others }) => {
  const _className = cn(className);

  return (
    <Link to='/'>
      <LogoSVG
        className={_className}
        {...others}
      />
    </Link>
  )
};

export default Logo;
