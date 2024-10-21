import "../App.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <nav>
        <div className="logo">
          <img src="./images/logo1.png" alt="girl image" />
        </div>
        <ul>
          <li>Sign Up</li>
          <li>Login</li>
          <li>Quizzes</li>
          <li>Log Out</li>{" "}
        </ul>{" "}
        <Link to="./signup" className="link">
          {" "}
          <button> Sign Up</button>{" "}
        </Link>
      </nav>{" "}
    </div>
  );
};
export default Navigation;
