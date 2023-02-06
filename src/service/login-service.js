import axios from "axios";

export const loginUser = async (emailRef, passwordRef) => {
  const details = {
    email: emailRef,
    password: passwordRef,
  };

  var response = axios.post("http://localhost:4200/login", details);
};
