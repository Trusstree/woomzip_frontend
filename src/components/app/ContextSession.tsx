"use client";

import { createContext, useContext, useState } from "react";

export interface UserContextValues {
  userContext: any;
  setUserContext: Function;
}

const contextDefaultValues: UserContextValues = {
  userContext: undefined,
  setUserContext: () => {},
};

export const UserContext = createContext(contextDefaultValues);
export const useUser = () => useContext(UserContext);

export default function ContextSession({ children }) {
  const [userContext, setUserContext] = useState(contextDefaultValues.userContext);

  const contextValue: UserContextValues = {
    userContext: userContext,
    setUserContext: setUserContext,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}
