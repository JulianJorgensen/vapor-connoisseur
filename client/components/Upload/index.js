import React, { Component } from 'react';
import cn from 'classnames';
import axios from 'axios';
import FileInput from 'react-file-input';
import { ThreeBounce } from 'better-react-spinkit';
import styles from './index.css';

export default class Upload extends Component {
  state = {};

  uploadFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return false;
    this.setState({
      uploading: true,
      uploaded: false,
    });
    const data = new FormData();
    data.append('file', file);
    axios.post('/upload', data).then((response) => {
      this.props.input.onChange(response.data);
      this.setState({
        uploading: false,
        uploaded: true,
      });
    });
    return true;
  }

  render() {
    const { disabled } = this.props;
    const { uploading, uploaded } = this.state;

    const renderUploading = () => (
      <div className={styles.uploading}>
        <div>Uploading</div>
        <ThreeBounce size={15} color="white" />
      </div>
    );

    const wrapperStyles = cn(styles.wrapper, {
      [styles.disabled]: disabled || uploading,
      [styles.uploaded]: uploaded,
    });

    return (
      <div className={wrapperStyles}>
        <FileInput
          className={styles.input}
          name="file"
          accept=".png,.gif,.jpg,.jpeg,.pdf,.ai,.psd,.svg"
          placeholder="Upload logo"
          onChange={e => this.uploadFile(e)}
          disabled={disabled || uploading}
        />
        {this.state.uploading ? renderUploading() : ''}
      </div>
    );
  }
}
