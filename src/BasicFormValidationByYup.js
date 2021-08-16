import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BasicFormValidationByYup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      address: '',
      country: '',
      toggleCheckbox: false,
      file: null
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      address: Yup.string()
        .max(250, 'Must be 250 characters or less')
        .required('Required'),
      country: Yup.string().required('Country is Required'),
      toggleCheckbox: Yup.boolean(),
      file: Yup.mixed().required()
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <br />
      <label htmlFor="address">Address</label>
      <textarea
        id="address"
        name="address"
        {...formik.getFieldProps('address')}
      />
      {formik.touched.address && formik.errors.address ? (
        <div>{formik.errors.address}</div>
      ) : null}
      <br />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br />

      <select id="country" name="country" {...formik.getFieldProps('country')}>
        <option value="" label="Select country" />
        <option value="BD" label="BD" />
        <option value="NOR" label="NOR" />
        <option value="SW" label="SW" />
      </select>
      {formik.touched.country && formik.errors.country ? (
        <div>{formik.errors.country}</div>
      ) : null}
      <br />
      <label htmlFor="toggleCheckbox">Agree</label>
      <input
        type="checkbox"
        id="toggleCheckbox"
        name="toggleCheckbox"
        {...formik.getFieldProps('toggleCheckbox')}
      />
      <br />
      <label for="file">File upload</label>
      <input
        id="file"
        name="file"
        type="file"
        {...formik.getFieldProps('file')}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicFormValidationByYup;
