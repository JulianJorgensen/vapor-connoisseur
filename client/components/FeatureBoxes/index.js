import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';

import styles from './index.css';

export default class FeatureBoxes extends Component {
  constructor() {
    super();

    this.state = {};
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  onVisibilityChange(isVisible) {
    if (!isVisible) return false;
    this.setState({
      isVisible,
    });
    return true;
  }

  render() {
    const {
      features, className, boxClassName, ...others
    } = this.props;

    const wrapperStyles = cn(styles.wrapper, className, {
      [styles.oneCol]: others.oneCol,
      [styles.twoCol]: others.twoCol,
      [styles.isVisible]: this.state.isVisible,
    });

    const boxStyles = cn(styles.box, boxClassName);

    const renderFeatures = features.map(feature => (
      <div key={feature.sys.id} className={boxStyles}>
        <h3 className={styles.title}>{feature.fields.title}</h3>
        <div className={styles.body}><ReactMarkdown source={feature.fields.body} /></div>
      </div>
    ));

    return (
      <VisibilitySensor partialVisibility onChange={this.onVisibilityChange}>
        <div className={wrapperStyles}>
          {renderFeatures}
        </div>
      </VisibilitySensor>
    );
  }
}
