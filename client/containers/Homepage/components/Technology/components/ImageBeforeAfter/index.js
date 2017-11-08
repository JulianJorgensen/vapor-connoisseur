import React from 'react';
import Slider from 'react-rangeslider';
import styles from './index.css';

export default class ImageBeforeAfter extends React.Component {
  state = {
    slidePosition: 50,
  }

  clearFeatureFocus() {
    this.feature1.blur();
    this.feature2.blur();
    this.feature3.blur();
    this.feature4.blur();
  }

  focusFeature(value) {
    if (value > 75) return this.feature1.focus();
    if (value > 50) return this.feature2.focus();
    if (value > 25) return this.feature3.focus();
    if (value <= 25) return this.feature4.focus();
  }

  handleSlidePositionChange = (value) => {
    this.focusFeature(value);
    this.setState({ slidePosition: value });
  }

  render() {
    const { slidePosition } = this.state;
    const { before } = this.props;
    const ExplodedSVG = this.props.after;
    return (
      <div className={styles.wrapper}>
        <div className={styles.images}>
          <div tabIndex="1" className="feature feature1" ref={(ref) => { this.feature1 = ref; }}>Adjustable airflow</div>
          <div tabIndex="2" className="feature feature2" ref={(ref) => { this.feature2 = ref; }}>Easy Fill cartridge</div>
          <div tabIndex="3" className="feature feature3" ref={(ref) => { this.feature3 = ref; }}>Stainless steel body</div>
          <div tabIndex="4" className="feature feature4" ref={(ref) => { this.feature4 = ref; }}>510 thread connection</div>
          
          <div
            className={`before ${styles.image} ${styles.before}`}
            style={{ width: `${slidePosition}%` }}
          >
            <div className={styles.inner}>
              <img src={before} alt="" />
              <ExplodedSVG />
            </div>
          </div>
          <div
            className={`image ${styles.image} ${styles.after}`}
          >
            <div className={styles.inner}><ExplodedSVG className={styles.svg} /></div>
          </div>
        </div>
        <Slider
          min={0}
          max={100}
          tooltip={false}
          value={slidePosition}
          onChange={this.handleSlidePositionChange}
          onChangeComplete={() => this.clearFeatureFocus()}
          className={styles.rangeSlider}
          handleLabel="SLIDE"
        />
      </div>
    );
  }
}
