import React from 'react'
import ProgressBar from 'react-toolbox/lib/progress_bar';
import styles from './index.css'

export const LoadingSpinner = () => (
  <div className={styles.container}>
    <ProgressBar multicolor type="circular" mode="indeterminate" />
  </div>
)

export default LoadingSpinner
