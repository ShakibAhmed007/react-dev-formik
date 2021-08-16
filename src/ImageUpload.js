import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState();

  const formik = useFormik({
    initialValues: {
      image: null
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required()
    }),
    onSubmit: values => {
      console.log({
        file: values.image,
        fileName: values.image.name,
        type: values.image.type,
        size: `${values.image.size} bytes`
      });
    }
  });

  const handleImageUpload = event => {
    formik.setFieldValue('image', event.currentTarget.files[0]);
    let reader = new FileReader();
    let file = event.currentTarget.files[0];
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label for="file">Upload Image:</label>
      <input id="image" name="image" type="file" onChange={handleImageUpload} />
      <img src={uploadedImage} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUpload;
