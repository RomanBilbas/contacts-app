import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validationSchema';
import { createContact } from '../../store/slices/contactsSlice';

function ContactForm ({ createNewContact }) {
  const initialValues = {
    fullName: '',
    phoneNumber: '',
  };
  const submitHandler = (value, { resetForm }) => {
    createNewContact(value);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationShema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          Name:{' '}
          <Field
            name='fullName'
            type='text'
            placeholder='contact Name'
            autoFocus
          />
          <ErrorMessage name='fullName' component='div' />
        </label>
        <label>
          Phone:{' '}
          <Field
            name='phoneNumber'
            type='text'
            maxLength='13'
            placeholder='+XXXXXXXXXXXX'
          />
          <ErrorMessage name='phoneNumber' component='div' />
        </label>
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewContact: data => dispatch(createContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
