import React from 'react';
import { withFormik } from 'formik'

const UserForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form"> 
        <div className="input-field">
          <label> Name: </label>
          <input 
            name="name" 
            type="text"
            onChange={props.handleChange}
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

        <div className="input-field">
          <label> Phone Number: </label>
          <input 
            name="phoneNumber" 
            type="text"
            onChange={props.handleChange}
            value={props.values.phoneNumber}
          />
          {props.touched.phoneNumber && props.errors.phoneNumber && <div className="text-danger">{props.errors.phoneNumber}</div>}
        </div>

        <div className="input-field">
          <label> Country: </label>
          <input 
            name="country" 
            type="text"
            onChange={props.handleChange}
            value={props.values.country}
          />
          {props.touched.country && props.errors.country && <div className="text-danger">{props.errors.country}</div>}
        </div>

        <div className="input-field">

        <label> Role: </label>
          <select 
            name="role" 
            type="text"
            onChange={props.handleChange}
            value={props.values.role}
          > 
            <option value="select" > Select a role </option>
            <option value="Administrator" > Administrator </option>
            <option value="Supervisor" > Supervisor </option>
            <option value="Worker" > Worker </option>

          </select>
          {props.touched.role && props.errors.role && <div className="text-danger">{props.errors.role}</div>}
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
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        country: user.country || '',
        role: user.role || ''
      };
    }
    else {
      return {
        name: '',
        email: '',
        phoneNumber: '',
        country: '',
        role: ''
      };
    }
  },
  validate: (values, props) => { // Agregamos nuestra funcion de validacion custom
    const errors = {};
    debugger;
    if (!values.email) {
      errors.email = 'Required';
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
    console.log('Hizo submit')
  },
 
});

export default enhancer(UserForm);