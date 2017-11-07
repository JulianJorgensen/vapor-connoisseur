import React, { Component } from 'react';
import axios from 'axios';
import FileInput from 'react-file-input';
import styles from './index.css';

export default class Upload extends Component {
  state = {};

  uploadFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    axios.post('/upload', data).then((response) => {
      console.log('response', response);
      this.props.input.onChange(response.data);
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <FileInput
          className={styles.input}
          name="file"
          accept=".png,.gif,.jpg,.jpeg,.pdf,.ai,.psd,.svg"
          placeholder="Upload logo"
          onChange={e => this.uploadFile(e)}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}
