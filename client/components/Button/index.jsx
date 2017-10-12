import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'lib/react-router-hash-link';
import cn from 'classnames';
import styles from './index.css';

const Button = ({ className, label, white, hollow, primary, blue, small, tiny, theme, target, href, ...others }) => {
  const _className = cn(className, styles.default, {
    [styles.white]: white,
    [styles.hollow]: hollow,
    [styles.primary]: primary
  });

  if (href === undefined) {
    return <button className={_className} {...others}>{label}</button>;
  }

  return (
    <HashLink to={href} target={target}>
      <button className={_className} theme={styles} {...others}>asd{label}</button>
    </HashLink>
  )
};

export default Button;
