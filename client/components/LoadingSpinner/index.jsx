import React from 'react'
import cn from 'classnames';
import { CubeGrid } from 'better-react-spinkit';
import styles from './index.css'

export const LoadingSpinner = ({ className }) => {
  let _containerStyles = cn(styles.container, className);
  return (
    <div className={_containerStyles}>
      <CubeGrid size={50} />
    </div>
  )
}

export default LoadingSpinner
