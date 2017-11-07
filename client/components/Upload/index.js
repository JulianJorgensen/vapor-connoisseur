import React, { Component } from 'react';
import axios from 'axios';
import FileInput from 'react-file-input';
import { ThreeBounce } from 'better-react-spinkit';
import styles from './index.css';

export default class Upload extends Component {
  state = {};

  uploadFile(e) {
    e.preventDefault();
    this.setState({
      uploading: true,
    });
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    axios.post('/upload', data).then((response) => {
      console.log('response', response);
      this.props.input.onChange(response.data);
      this.setState({
        uploading: false,
      });
    });
  }

  render() {
    const renderUploading = () => (
      <div className={styles.uploading}>
        <div>Uploading</div>
        <ThreeBounce size={15} color="white" />
      </div>
    );

    return (
      <div className={styles.wrapper}>
        <FileInput
          className={styles.input}
          name="file"
          accept=".png,.gif,.jpg,.jpeg,.pdf,.ai,.psd,.svg"
          placeholder="Upload logo"
          onChange={e => this.uploadFile(e)}
          disabled={this.props.disabled || this.state.uploading}
        />
        {this.state.uploading ? renderUploading() : ''}
      </div>
    );
  }
}
