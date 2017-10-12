import React from 'react';
import ImageDiff from 'react-image-diff';
import Slider from 'react-rangeslider'

import productExploded from 'assets/images/XY05_EXPLO1-24.png';
import productExploded2 from 'assets/images/XY05_EXPLO1-24copy.png';
import styles from './index.css';

export default class HomepageTechnology extends React.Component {
  state = {
    slidePosition: 50
  }

  handleSlidePositionChange = (value) => {
    console.log('value', value);
    this.setState({slidePosition: value});
  }

  render() {
    let { slidePosition } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.graphic}>
            <ImageDiff before={productExploded} after={productExploded2} type='swipe' value={(slidePosition/100)} height={400} width={400} />
            <Slider
              min={0}
              max={100}
              tooltip={false}
              value={slidePosition}
              onChange={this.handleSlidePositionChange}
              className={styles.rangeSlider}
              handleLabel='SLIDE'
            />
          </div>

          <div className={styles.process}>
            <h2>The VC process</h2>
            <p>Every oil formulation...</p>
            <div className={styles.cta}>Learn more</div>
          </div>
        </div>
      </div>
    )
  }
}
