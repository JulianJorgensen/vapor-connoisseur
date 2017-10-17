import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';

import styles from './index.css';

export default class FeatureBoxes extends React.Component {
  render() {
    let { features, className } = this.props;
    let _wrapperStyles = cn(styles.wrapper, className);
    return (
      <div className={_wrapperStyles}>
        {features.map((feature) => {
          return (
            <div className={styles.box}>
              <h3 className={styles.title}>{feature.fields.title}</h3>
              <div className={styles.body}><ReactMarkdown source={feature.fields.body} /></div>
            </div>
          )
        })}
      </div>      
    )
  }
}
