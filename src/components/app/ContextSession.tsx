'use client'
 
import { createContext, useContext, useState } from 'react'

export interface UserContextValues {
  accessToken: string,
  userContext: any,
  setAccessToken: Function,
  setUserContext: Function
}

const contextDefaultValues: UserContextValues = {
  accessToken: "",
  userContext: undefined,
  setAccessToken: () => {},
  setUserContext: () => {},
}

export const UserContext = createContext(contextDefaultValues);
export const useUser = () => useContext(UserContext); 

export default function ContextSession({ children }) {
  const [accessToken, setAccessToken] = useState(contextDefaultValues.accessToken);
  const [userContext, setUserContext]=useState(contextDefaultValues.userContext);
  
  const contextValue: UserContextValues = {
    accessToken: accessToken,
    userContext: userContext,
    setAccessToken: setAccessToken,
    setUserContext: setUserContext,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}