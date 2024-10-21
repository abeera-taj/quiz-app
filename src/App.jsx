import "./App.css";
import Navigation from "./components/Navigation.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Quiz from "./components/Quiz.jsx";
import MernStack from "./components/MernStack.jsx";

const App = () => {
  return (
    <div>
      {" "}
      <Router>
        {" "}
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Navigation />}></Route>
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/mernstack-quiz" element={<MernStack />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
