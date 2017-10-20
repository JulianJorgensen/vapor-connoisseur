import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import TextField from 'components/TextField';
import { Field, reduxForm } from 'redux-form';
import Button from 'components/Button';
import styles from './index.css';

let Form = props => {
  const { formFields, submitLabel, submitSucceeded, handleSubmit, pristine, reset, submitting } = props;
  let _responseStyles = cn(styles.response, {
    [styles.success]: submitSucceeded
  })
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((formField, i) => {
        let { name, type, ...others} = formField;
        return (
          <Field
            key={i}
            name={name.toLowerCase().replace(/\s/g, '')}
            label={name}
            type={type || 'text'}
            component={TextField}
            disabled={submitting}
            {...others}
          />
        )
      })}
      <div>
        <Button className={styles.cta} label={submitting ? 'Sending...' : submitLabel} type='submit' disabled={submitting} />
        <div className={_responseStyles}>{submitSucceeded ? 'Message sent successfully!' : ''}</div>
      </div>
    </form>
  )
}

Form = reduxForm({
  // you can add other reduxForm options here
  destroyOnUnmount: false,
})(Form);

export default Form;
