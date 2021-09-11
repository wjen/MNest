import React, { useState, useEffect, useContext, createContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  // set user everytime user is changed
  useEffect(() => {
    setMyUser(user);
  }, [user]);
  const [myUser, setMyUser] = useState(null);
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
