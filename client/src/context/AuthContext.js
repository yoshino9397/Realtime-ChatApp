import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: {
  //   _id: "623fc40d3b173b8e5c14955b",
  //   username: "EijiOkumura",
  //   email: "eijiokumura@gmail.com",
  //   profilePicture: "person/eiji.png",
  //   coverPicture: "person/eijibg.jpeg",
  //   isAdmin: false,
  //   followers: [],
  //   followings: [],
  // },
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
