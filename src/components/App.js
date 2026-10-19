
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { edited } from "./Useinfoslice";

const App = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.response);

  return (
    <div>
      <h1>User Information</h1>

      <label>
        Enter Your Name
        <input
          type="text"
          value={input.name}
          onChange={(e) =>
            dispatch(edited({ name: e.target.value }))
          }
        />
      </label>

      <br />

      <label>
        Enter Your Email
        <input
          type="email"
          value={input.email}
          onChange={(e) =>
            dispatch(edited({ email: e.target.value }))
          }
        />
      </label>

      <h4>Corrected Names</h4>
      <p>Name: {input.name}</p>
      <p>Email: {input.email}</p>
    </div>
  );
};

export default App;

