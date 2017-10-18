import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';
import styles from './index.css';

export default class ReactSelect extends React.Component {
  render() {
    let { className, ...others } = this.props;
    let _wrapperStyles = cn(styles.wrapper, className);
    return (
      <Select 
        className={_wrapperStyles}
        {...others}
      />
    )
  }
}
