import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { edited } from "./Useinfoslice";

const App = () => {

  const dispatch = useDispatch();

  const input = useSelector((state) => state.response);

  return (
    <div>
      <label>
        Enter Your Name
        <input
          type="text"
          value={input.name}
          onChange={(e) =>
            dispatch(edited({
              name: e.target.value
            }))
          }
        />
      </label>

      <label>
        Enter Your Email
        <input
          type="email"
          value={input.email}
          onChange={(e) =>
            dispatch(edited({
              email: e.target.value
            }))
          }
        />
      </label>

      <div>
        <h4>Corrected Names</h4>
        <span>Name: {input.name}</span>
        <br />
        <span>Email: {input.email}</span>
      </div>
    </div>
  );
};

export default App;
