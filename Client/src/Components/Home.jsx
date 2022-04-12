import React from "react";
import { Consumer } from "../contextApi";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate("/addroom");
  };

  return (
    <Consumer>
      {(store) => (
        <div>
          {store.home}
          <button onClick={submitHandler}>submit</button>
        </div>
      )}
    </Consumer>
  );
};
