import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import './App.css'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthExample = () => (
  <div className="container">
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  </div>
);

const AuthButton = withRouter(({history}) => 
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!
        <button
          onClick={() => {
            // Llamar a signout y en el CB RESETEAR la ruta
            // Utilizar el history.push para resetear la ruta
            fakeAuth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  console.log(fakeAuth.isAuthenticated),
  <Route
    {...rest}
    render={props => fakeAuth.isAuthenticated ? (
      <Component {...props} />) : (
      <Redirect to="/login"/>)}
  />
  // En el render, Chequear si esta autentificado. 
  // Si no lo esta, redirijir, si lo esta, renderizar el Componente que viene por props en component.
);

const Public = () => <h3>Public Component Content</h3>;
const Protected = () => <h3>Protected Component Content</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    // TODO COMPLETAR Llamar al login y en el callback actualizar el state
    fakeAuth.authenticate(() => { this.setState({ redirectToReferrer: true }); });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;