import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import styles from './index.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.container}>
        Footer
      </footer>
    )
  }
}
