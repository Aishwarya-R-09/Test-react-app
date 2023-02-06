import axios from "axios";

export const signupUser = async (nameRef, emailRef, passwordRef) => {
  const details = {
    name: nameRef,
    email: emailRef,
    password: passwordRef,
  };

  var response = axios.post("http://localhost:4200/login", details);
};
