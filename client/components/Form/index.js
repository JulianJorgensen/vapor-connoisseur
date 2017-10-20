import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import axios from 'axios';
import Form from './Form';

@connect((state, props) => ({
  form: props.formName
}))
export default class FormContainer extends Component {
  onSubmit = ({ name, email, ...others }) => {
    return new Promise((resolve, reject) => {
      axios.post('/sendEmail', {
        fromName: name,
        fromEmail: email,
        subject: `${this.props.subject} from ${name}`,
        ...others
      })
      .then(() => {
        resolve();
        this.props.dispatch(reset(this.props.form));
      })
      .catch((err) => {
        console.error('error sending email', err);
        resolve();
      });
    });
  }
  
  render() {
    return <Form {...this.props} onSubmit={this.onSubmit} />
  }
}
