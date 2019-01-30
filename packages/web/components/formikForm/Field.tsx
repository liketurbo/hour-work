import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Field as FormikField, FieldProps, FieldConfig } from 'formik';
import humanizeString from 'humanize-string';

const Field = ({ name, label }: FieldConfig & { label?: string }) => (
  <FormikField {...{ name }}>
    {({ field }: FieldProps) => (
      <TextField
        {...field}
        required
        id={name}
        name={name}
        label={label ? label : humanizeString(name)}
        fullWidth
      />
    )}
  </FormikField>
);

export default Field;
