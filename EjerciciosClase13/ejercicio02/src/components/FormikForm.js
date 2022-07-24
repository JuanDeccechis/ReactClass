import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TextInput from './TextInputFormik';

export default class AddGameForm extends Component {
  render() {
    return (
      <div className="addGameForm">
         <Formik
          initialValues={{ /* igual al mapPropsToValues */
            title: '',
            email: ''
          }}
          validationSchema={ Yup.object().shape({
            title: Yup.string()
              .min(3, 'Title must be at least 3 characters long.')
              .required('Title is required.'),
            email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
            })
          }
          onSubmit={(
          values,
          { setSubmitting, setErrors } /* props, setValues y otros */
          ) => { /* realizamos el submit */ }}
          render={ ({values, errors, touched, handleChange, handleSubmit,
            handleBlur, isSubmitting }) => (
            <Form onSubmit ={handleSubmit }>
              <Field
                type="text"
                name="title"
                label="Title"
                component={TextInput}
              />
              <Field
                type="text"
                name="email"
                label="email"
                component={TextInput}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <button type="submit" disabled ={isSubmitting }>
              Submit
              </button>
            </Form>
          )}
        />
      </div>
    )
  }
}
