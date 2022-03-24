import { useContext } from "react";
import { UserContext } from "../store/user";

const About = () => {
  const context = useContext(UserContext);
  console.log(context);
  return <h1>{context.major}</h1>;
};

export default About;
