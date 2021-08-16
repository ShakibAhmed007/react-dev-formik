import React from 'react';
import './style.css';
import BasicForm from './BasicForm';
import BasicFormValidationByYup from './BasicFormValidationByYup';

export default function App() {
  return (
    <div>
      <h1>Formik Example</h1>
      <BasicForm />
      <hr />
      <h1>Formik with Yup</h1>
      <BasicFormValidationByYup />
    </div>
  );
}
