import React, { Component } from 'react';
import cn from 'classnames';
import AngleLeftIcon from 'assets/icons/FontAwesome/regular/angle-left.svg';
import AngleRightIcon from 'assets/icons/FontAwesome/regular/angle-right.svg';
import { connect } from 'react-redux';
import styles from './index.css';

const AUTO_SLIDE_INTERVAL = 5000;

@connect(({ site }) => ({
  content: site.content.about || {},
}))
export default class AboutServicesFeatures extends Component {
  state = {
    activeFeature: 0,
  }

  componentWillMount() {
    const features = [];
    this.props.content.serviceFeatures.map(feature => features.push(feature));
    this.setState({ features });
  }

  componentDidMount() {
    this.initAutoSlideTimer();
  }

  initAutoSlideTimer() {
    this.resetTimeoutBar();

    this.autoSlideInterval = setInterval(() => {
      this.handleTriggerNext();
      this.resetTimeoutBar();
    }, AUTO_SLIDE_INTERVAL);
  }

  resetTimeoutBar() {
    this.setState({
      timeoutBarActive: false,
    });
    setTimeout(() => {
      this.setState({
        timeoutBarActive: true,
      });
    }, 50);
  }

  stopAutoSlider() {
    this.setState({
      timeoutBarActive: false,
    });
    clearInterval(this.autoSlideInterval);
  }

  handleTriggerPrev = () => {
    let prevActiveFeature;
    if (this.state.activeFeature === 0) {
      prevActiveFeature = this.state.features.length - 1;
    } else {
      prevActiveFeature = this.state.activeFeature - 1;
    }

    this.setState({
      activeFeature: prevActiveFeature,
    });
  }

  handleTriggerNext = () => {
    let nextActiveFeature;
    if (this.state.activeFeature === (this.state.features.length - 1)) {
      nextActiveFeature = 0;
    } else {
      nextActiveFeature = this.state.activeFeature + 1;
    }

    this.setState({
      activeFeature: nextActiveFeature,
    });
  }

  handlePrevClick = () => {
    this.handleTriggerPrev();
    this.stopAutoSlider();
  }

  handleNextClick = () => {
    this.handleTriggerNext();
    this.stopAutoSlider();
  }

  handleFeatureClick = (index) => {
    this.setState({ activeFeature: index });
    this.stopAutoSlider();
  }

  render() {
    const { features, activeFeature, timeoutBarActive } = this.state;

    const timeoutBarStyles = cn(styles.timeoutBar, {
      [styles.active]: timeoutBarActive,
    });
    return (
      <div className={styles.features}>
        <div className={styles.featuresBody}>
          <div className={styles.position}>
            <div className={styles.positionBar}>
              <div className={timeoutBarStyles} />
            </div>
            <div className={styles.slideNumber}>
              {this.state.activeFeature + 1} / {features.length}
            </div>
          </div>

          <div className={styles.featuresContent}>
            {features.map((feature, index) => {
              const featureStyles = cn(styles.feature, {
                [styles.active]: activeFeature === index,
              });
              return (
                <div key={feature.sys.id} className={featureStyles}>
                  <h3 className={styles.featureTitle}>{feature.fields.title}</h3>
                  <p>{feature.fields.body}</p>
                </div>
              )
            })}
          </div>

          <div className={styles.miniNav}>
            <button className={styles.miniNavItem} onClick={this.handlePrevClick}><AngleLeftIcon /> Prev</button>
            <button className={styles.miniNavItem} onClick={this.handleNextClick}>Next <AngleRightIcon /></button>
          </div>
        </div>

        <div className={styles.featuresNav}>
          <ol>
            {features.map((feature, index) => {
                const featureNavItemStyles = cn(styles.featureNavItem, {
                  [styles.active]: activeFeature === index,
                });
                return (
                  <li
                    key={feature.sys.id}
                    className={featureNavItemStyles}
                  >
                    <button
                      onClick={() => this.handleFeatureClick(index)}
                      onKeyDown={() => this.handleFeatureClick(index)}
                    >
                      {feature.fields.title}
                    </button>
                  </li>
                );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
