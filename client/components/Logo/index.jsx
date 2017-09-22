import React from 'react';
import cn from 'classnames';

import LogoSVG from '-!svg-react-loader?name=Icon!assets/icons/julian-jorgensen-logo.svg';
import styles from './index.css';

const Logo = ({ className, color, size, ...others }) => {
  const _className = cn(className);

  return (
    <LogoSVG
      className={_className}
      {...others}
    />
  )
};

export default Logo;
