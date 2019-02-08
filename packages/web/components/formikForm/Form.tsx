import React from 'react';
import { Formik, FormikActions, FormikProps } from 'formik';

const Form = <Values extends {}>({
  initialValues,
  onSubmit,
  children,
  validationSchema,
  className
}: {
  initialValues: Values;
  onSubmit: (values: Values, formikActions: FormikActions<Values>) => void;
  children: (
    props: Pick<
      FormikProps<Values>,
      Exclude<keyof FormikProps<Values>, 'handleSubmit'>
    >
  ) => React.ReactNode;
  validationSchema?: any;
  className?: string;
}) => (
  <Formik<Values> {...{ initialValues, onSubmit, validationSchema }}>
    {({ handleSubmit, ...rest }) => (
      <form {...{ className }} onSubmit={handleSubmit}>
        {children(rest)}
      </form>
    )}
  </Formik>
);
export default Form;
