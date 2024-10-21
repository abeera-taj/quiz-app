// import { signupUser } from "./authentication.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "authentication";
import { app } from "../authentication";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // setting signup for firebase
  const auth = getAuth(app);

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
    navigate("/mernstack-quiz");
  };

  return (
    <div className="signup-page">
      <form>
        {/* <label htmlFor="Full Name">Full Name</label> <br />
        <input type="text" name="full-name" id="full-name" /> <br /> */}
        <label htmlFor="Email Address">Email Address </label> <br />
        <input
          placeholder="Email"
          type="email"
          name="signup-email"
          id="signup-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password"> Password</label>
        <br />
        <input
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {/* <label htmlFor="confirm-password"> Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
        />{" "} */}
        <br />
      </form>

      <button id="signup" onClick={createUser}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
