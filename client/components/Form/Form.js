import React from 'react';
import cn from 'classnames';
import TextField from 'components/TextField';
import { Field, reduxForm } from 'redux-form';
import Button from 'components/Button';
import styles from './index.css';

const Form = ({
  formFields,
  submitLabel,
  submitSucceeded,
  handleSubmit,
  pristine,
  reset,
  submitting,
}) => {
  const responseStyles = cn(styles.response, {
    [styles.success]: submitSucceeded,
  });
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((formField, i) => {
        const { name, type, ...others } = formField;
        return (
          <Field
            key={name}
            name={name.toLowerCase().replace(/\s/g, '')}
            label={name}
            type={type || 'text'}
            component={TextField}
            disabled={submitting}
            {...others}
          />
        );
      })}
      <div>
        <Button className={styles.cta} label={submitting ? 'Sending...' : submitLabel} type="submit" disabled={submitting} />
        <div className={responseStyles}>{submitSucceeded ? 'Message sent successfully!' : ''}</div>
      </div>
    </form>
  );
};

export default reduxForm({
  // you can add other reduxForm options here
  destroyOnUnmount: false,
})(Form);
