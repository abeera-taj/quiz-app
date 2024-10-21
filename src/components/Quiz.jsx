import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="quiz-box">
      {" "}
      <div className="box">
        <img
          src="/public/images/mernstack.png"
          alt="MERN Stack"
          className="box-image"
        />
        <Link to="/mernstack"> MERN Stack</Link>{" "}
      </div>
      <div className="box">
        {" "}
        <img
          src="/public/images/phone.png"
          alt="App dev"
          className="box-image"
        />
        <Link to="/appdev"> App Dev</Link>{" "}
      </div>
      <div className="box">
        {" "}
        <img
          src="/public/images/graphics.png"
          alt="Graphics"
          className="box-image"
        />
        <Link to="/graphics">Graphics</Link>{" "}
      </div>
    </div>
  );
};

export default Quiz;
