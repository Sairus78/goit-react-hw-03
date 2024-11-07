import css from './ContactForm.module.css'
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactForm = ({ addData }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(5, 'Too short')
      .max(15, 'Too long')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    addData({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        const nameId = nanoid();
        const numberId = nanoid();

        return (
          <Form className={css.form}>
            <label htmlFor={nameId}>Name</label>
            <Field className={css.field} type="text" name="name" id={nameId} />
            {errors.name && touched.name ? <div className={css.errors}>{errors.name}</div> : null}

            <label htmlFor={numberId}>Number</label>
            <Field className={css.field} type="number" name="number" id={numberId} />
            {errors.number && touched.number ? (
              <div className={css.errors}>{errors.number}</div>
            ) : null}

            <button className={css.formButton} type="submit">Add contact</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
