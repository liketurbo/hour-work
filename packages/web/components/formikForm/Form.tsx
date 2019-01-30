import React from 'react';
import { Formik, FormikActions } from 'formik';

const Form = <Values extends {}>({
  initialValues,
  onSubmit,
  children,
  validationSchema,
  className
}: {
  initialValues: Values;
  onSubmit: (values: Values, formikActions: FormikActions<Values>) => void;
  children: React.ReactElement<any> | React.ReactElement<any>[];
  validationSchema?: any;
  className?: string;
}) => (
  <Formik<Values> {...{ initialValues, onSubmit, validationSchema }}>
    {({ handleSubmit }) => (
      <form {...{ className }} onSubmit={handleSubmit}>
        {children}
      </form>
    )}
  </Formik>
);

export default Form;
