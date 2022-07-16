import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TextInput from './TextInputFormik';

export default class AddGameForm extends Component {
  render() {
    return (
      <div className="addGameForm">
        <Formik
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .min(3, 'Title must be at least 3 characters long.')
              .required('Title is required.'),
            price: Yup.number()
              .max(60, 'Costs too much, wait for the sale!')
              .required('Price is required.').positive().integer(),
          })}
          initialValues={{
            title: '',
            releaseYear: '',
            genre: '',
            price: '',
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values))
              actions.setSubmitting(false)
            }, 1000)
          }}
          render={({ errors, dirty, isSubmitting, handleReset }) => (
            <Form>
              <Field
                type="text"
                name="title"
                label="Title"
                component={TextInput}
              />
              <Field
                type="text"
                name="releaseYear"
                label="Release Year"
                component={TextInput}
              />
              <Field
                type="text"
                name="genre"
                label="Genre"
                component={TextInput}
              />
              <Field
                type="number"
                name="price"
                label="Price"
                component={TextInput}
              />
              
              <button
                type="submit"
                className="btn btn-default"
                disabled={isSubmitting || !dirty}
              >
                Add Game
              </button>

              <button
                type="button"
                className="btn btn-default"
                disabled={isSubmitting || !dirty}
                onClick={handleReset}
              >
                Reset
              </button>
            </Form>
          )}
        />
      </div>
    )
  }
}
