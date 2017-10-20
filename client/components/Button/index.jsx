import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'lib/react-router-hash-link';
import cn from 'classnames';
import styles from './index.css';

const Button = ({ className, label, target, href, ...others }) => {
  const _className = cn(className, styles.default, {
    [styles.white]: others.white,
    [styles.hollow]: others.hollow,
    [styles.primary]: others.primary,
    [styles.disabled]: others.disabled
  });

  let renderButton = () => {
    return (
      <button 
        className={_className}
        {...others}
      >
        <span className={styles.label}>{label}</span>
      </button>
    )
  }

  if (href === undefined) {
    return renderButton();
  }

  return (
    <HashLink to={href} target={target}>
      {renderButton()}
    </HashLink>
  )
};

export default Button;
