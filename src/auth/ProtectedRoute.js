import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from '../components';

// from auth0 docs
const ProtectedRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      // redirects to auth0 login home screen, loading appears during redirect
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
      })}
    ></Route>
  );
};
export default ProtectedRoute;
