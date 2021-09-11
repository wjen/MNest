import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from '../components';

import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

// from auth0 docs
const ProtectedRoute = ({ component, ...rest }) => {
  const { myUser } = useUserContext();
  // const { user } = useAuth0();
  return (
    <Route
      {...rest}
      // render={() => {
      //   return myUser ? component : <Redirect to='/' />;
      // }}

      // redirects to auth0 login home screen, loading appears during redirect
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
      })}
    ></Route>
  );
};
export default ProtectedRoute;
