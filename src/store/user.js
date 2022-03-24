import { createContext } from "react";

export const UserContext = createContext();

const UserStore = (props) => {
  const users = {
    name: "jun",
    mojor: "front",
  };

  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  );
};

export default UserStore;
