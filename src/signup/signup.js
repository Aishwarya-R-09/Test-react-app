import { useRef } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../service/signup-service";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="parent-card">
      <h4 color="red">Signup</h4>
      <div className="card">
        <h4 className="card-header">Signup</h4>
        <div className="card-body">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
          ></input>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
          ></input>
          <p className="mt-4">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="button">
          <button
            className="btn"
            onClick={() =>
              signupUser(
                nameRef.current.value,
                emailRef.current.value,
                passwordRef.current.value
              )
            }
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
