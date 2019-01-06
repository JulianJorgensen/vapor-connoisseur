import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { find } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Hero from 'components/Hero';
import LoadingSpinner from 'components/LoadingSpinner';
import Footer from 'layout/Footer';
import styles from './index.css';

@withRouter
@connect(({ site }) => ({
  content: site.content.legalPage,
}))
export default class Legal extends Component {
  render() {
    if (!this.props.content) {
      return (
        <div className={styles.wrapper}>
          <LoadingSpinner />
        </div>
      );
    }

    const { page } = this.props.match.params;
    const data = find(this.props.content, { fields: { url: page } });
    const content = data.fields;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero headline={content.headline} />
          <div className={styles.body}><ReactMarkdown source={content.body} /></div>
        </div>
        <Footer />
      </div>
    );
  }
}
