import React, { createContext, useState, useContext } from 'react';

const UserDetailsContext = createContext();

export const useUserDetails = () => useContext(UserDetailsContext);

export const UserDetailsProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState();
  return (
    <UserDetailsContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsContext;
