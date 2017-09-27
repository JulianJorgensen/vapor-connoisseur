import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'components/Button';

import styles from './index.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src='http://placehold.it/900x800/181818' />
      </div>
    )
  }
}
