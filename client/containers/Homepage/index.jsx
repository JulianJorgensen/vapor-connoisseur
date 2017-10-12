import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './components/Landing';
import About from './components/About';
import Technology from './components/Technology';
import Samples from './components/Samples';
import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.homepage
}))
export default class Homepage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Landing />
        <About />
        <Technology />
        <Samples />
      </div>
    )
  }
}
