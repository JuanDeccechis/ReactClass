import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './components/SimpleForm'
import FormikForm from './components/FormikForm'

class App extends Component {
  state = {
    formType: 'simple',
  }

  handleChangeForm = formType => {
    console.log(formType)
    this.setState((prevState, props) => ({
      formType,
    }))
  }

  render() {

    const { formType } = this.state

    let form = null
    switch (formType) {
      case 'simple':
        form = <SimpleForm />
        break
      case 'formik':
        form = <FormikForm />
        break

      default:
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div>
            <span
              className="form-link"
              onClick={() => this.handleChangeForm('simple')}
            >
              Simple
            </span>
            <span
              className="form-link"
              onClick={() => this.handleChangeForm('formik')}
            >
              Formik
            </span>
          </div>
        </header>
        <div className="formContainer">{form}</div>
      </div>
    );
  }
}

export default App;
