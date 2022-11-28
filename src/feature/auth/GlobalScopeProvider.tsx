import React, {createContext, useState} from 'react';
import {UserData} from '../../domain/model/UserData';

export interface GlobalContext {
  userData: UserData | null;
  onGetUserSuccess: (user: UserData) => void;
  onLogout: () => void;
}

const initData = {
  userData: null,
  onGetUserSuccess: () => {},
  onLogout: () => {},
};

export const GlobalContext = createContext<GlobalContext>(initData);

export const GlobalContextProvider = (props: Props) => {
  const {
    children,
    ...rest
  } = props;

  const [userData, setUserData] = useState<UserData | null>(initData.userData);

  const onGetUserSuccess = (user: UserData) => {
    setUserData(user);
  };

  const onLogout = () => {
    setUserData(null);
  };

  const contextValue = {
    userData,
    onLogout,
    onGetUserSuccess,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

interface Props {
  children?: React.ReactNode
}
