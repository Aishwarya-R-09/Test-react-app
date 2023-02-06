import { useRef } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../service/login-service";
import "./login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="parent-card">
      <div className="card">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            ref={emailRef}
          ></input>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          ></input>
          <p className="mt-4">
            Don't have an account ? <Link to="/signup">Signup</Link>
          </p>
        </div>
        <div className="button">
          <button
            className="btn"
            onClick={() =>
              loginUser(emailRef.current.value, passwordRef.current.value)
            }
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
