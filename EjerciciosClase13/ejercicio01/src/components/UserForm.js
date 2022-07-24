import React from 'react';
import { withFormik } from 'formik'

const handleChangeInternal = (event) => {
  console.log("change internal");
  console.log(event);
}

const UserForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form"> 
        <div className="input-field">
          <label> Name: </label>
          <input 
            name="name" 
            type="text"
            onChange={(e) => {props.handleChange(e); handleChangeInternal(e)}} 
            value={props.values.name}
          />
          {props.touched.name && props.errors.name && <div className="text-danger">{props.errors.name}</div>}
        </div>

        <div className="input-field">
          <label> Email: </label>
          <input 
            name="email" 
            type="text"
            onChange={props.handleChange}
            onBlur={props.onBlur}
            value={props.values.email}
          />
          {props.touched.email && props.errors.email && <div className="text-danger">{props.errors.email}</div>}
        </div>


        <button type="submit" disabled={props.isSubmitting || !props.dirty}> Save </button>
      </div>
    </form>
  );
};

const enhancer = withFormik({
  mapPropsToValues: ({ user }) => { // Transformamos las props externas a valores
    if(user) {
      return {
        name: user.name || '',
        email: user.email || ''
      };
    }
    else {
      return {
        name: '',
        email: ''
      };
    }
  },
  validate: (values, props) => { // Agregamos nuestra funcion de validacion custom
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } 
    if (!values.name) {
      errors.name = 'Required';
    }
    // else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }

    // if (!values.name) {
    //   errors.name = 'Required';
    // }
    // if (!values.phoneNumber) {
    //   errors.phoneNumber = 'Required';
    // }
    // if (!values.country) {
    //   errors.country = 'Required';
    // } else if(values.country.length <= 3) {
    //   errors.country = 'The length of the country has to be larger than 3';
    // }

    // if(!values.role || (values.role !== 'Administrator' && values.role !== 'Supervisor' && values.role !== 'Worker')) {
    //   errors.role = 'Select a role';
    // }

    return errors;
  },

  handleSubmit: (values, actions) => { // realizamos el submit
    // actions.props.onSubmit(values)
    console.log('Hizo submit');
    console.log(values);
  },
 
});

export default enhancer(UserForm);