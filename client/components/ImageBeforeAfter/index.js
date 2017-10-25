import React from 'react';
import Slider from 'react-rangeslider';
import styles from './index.css';

export default class ImageBeforeAfter extends React.Component {
  state = {
    slidePosition: 50,
  }

  handleSlidePositionChange = (value) => {
    this.setState({ slidePosition: value });
  }

  render() {
    const { slidePosition } = this.state;
    const { before } = this.props;
    const After = this.props.after;
    return (
      <div className={styles.wrapper}>
        <div className={styles.images}>
          <div className="feature feature1">Adjustable airflow</div>        
          <div className="feature feature2">Easy Fill cartridge</div>
          <div className="feature feature3">510 thread connection</div>
          <div className="feature feature4">Stainless steel body</div>
          
          <div
            className={`${styles.image} ${styles.before}`}
            style={{ width: `${slidePosition}%` }}
          >
            <div className={styles.inner}><img src={before} alt="" /></div>
          </div>
          <div
            className={`image ${styles.image} ${styles.after}`}
          >
            <div className={styles.inner}><After className={styles.svg} /></div>
          </div>
        </div>
        <Slider
          min={0}
          max={100}
          tooltip={false}
          value={slidePosition}
          onChange={this.handleSlidePositionChange}
          className={styles.rangeSlider}
          handleLabel="SLIDE"
        />
      </div>
    );
  }
}
