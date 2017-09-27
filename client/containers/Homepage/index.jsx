import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'components/Button';

import styles from './index.css';

export default class Homepage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src='http://placehold.it/900x900/181818' />
      </div>
    )
  }
}
