import React from 'react';
import { HashLink } from 'lib/react-router-hash-link';
import cn from 'classnames';
import styles from './index.css';

export default ({
  label,
  href,
  target,
  className,
  ...props
}) => {
  const containerStyles = cn(className, styles.default, {
    [styles.white]: props.white,
    [styles.hollow]: props.hollow,
    [styles.primary]: props.primary,
    [styles.disabled]: props.disabled,
  });

  const renderButton = () => (
    <button
      className={containerStyles}
      {...props}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );

  if (href === undefined) {
    return renderButton();
  }

  return (
    <HashLink to={href} target={target}>
      {renderButton()}
    </HashLink>
  );
};
