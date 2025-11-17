import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("saikat@gmail.com");
  const [password, setPassword] = useState("Raiden@199725");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:1111/login", {
        emailAddress,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center m-3">
      <div className="card card-border bg-base-200 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login Page</h2>

          {/* Email Input */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Address :</legend>
              <input
                type="text"
                className="input"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </fieldset>
          </div>

          {/* Password Input  */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password :</legend>
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>

          {/* Login Button */}
          <div className="card-actions justify-center m-3">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
