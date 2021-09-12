import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

// Gives the private route enough time to check for user
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <div className='loading'></div>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .loading {
    margin-top: 0;
  }
`;

export default AuthWrapper;
