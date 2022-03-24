import { createContext } from "react";

export const UserContext = createContext();

const UserStore = (props) => {
  const users = {
    name: "jun",
    major: "front",
  };

  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  );
};

export default UserStore;
