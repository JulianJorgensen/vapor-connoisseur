import React, { Component } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import styles from './index.css';

@connect(({ site }) => ({
  content: site.content.about || {}
}))
export default class AboutServices extends Component {
  state = {
    activeFeature: 0
  }

  componentWillMount() {
    let features = [];
    this.props.content.serviceFeatures.map((feature, i) => {
      features.push(feature);
    });
    this.setState({features});
  }

  handlePrevClick = () => {
    if (this.state.activeFeature === 0) {
      return false;      
    }

    this.setState({
      activeFeature: this.state.activeFeature - 1
    });
  }

  handleNextClick = () => {
    if (this.state.activeFeature === (this.state.features.length-1)) {
      return false;      
    }

    this.setState({
      activeFeature: this.state.activeFeature + 1
    });
  }

  render() {
    let { content } = this.props;
    let { features, activeFeature } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2>{content.servicesHeadline}</h2>
            <div>{content.servicesBody}</div>          
          </div>

          <div className={styles.features}>
            <div className={styles.featuresBody}>
              <div className={styles.stepIndicator}>
                {this.state.activeFeature + 1} / {features.length}
              </div>

              <div className={styles.featuresContent}>
                {features.map((feature, index) => {
                  let _featureStyles = cn(styles.feature, {
                    [styles.active]: activeFeature === index
                  })
                  return (
                    <div className={_featureStyles}>
                      <h3>{feature.fields.title}</h3>
                      <p>{feature.fields.body}</p>
                    </div>
                  )
                })}
              </div>

              <div className={styles.miniNav}>
                <div className={styles.miniNavItem} onClick={this.handlePrevClick}>Prev</div>
                <div className={styles.miniNavItem} onClick={this.handleNextClick}>Next</div>
              </div>
            </div>

            <div className={styles.featuresNav}>
              <ol>
                {features.map((feature, index) => {
                    let _featureNavItemStyles = cn(styles.featureNavItem, {
                      [styles.active]: activeFeature === index
                    })
                    return (
                      <li className={_featureNavItemStyles} onClick={() => this.setState({activeFeature: index})}>{feature.fields.title}</li>
                    )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
