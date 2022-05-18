import React from "react";
import { Consumer } from "../contextApi";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate(); // מעבר בין עמודים

  const submitHandler = () => {
    navigate("/addroom"); // עובר לעמוד אחר
  };

  return (
    <Consumer>
      {/* עוטף את הקומפוננטה בקונסיומר בשביל להשתמש בקונטקסט */}
      {(store) => (
        <div>
          {store.home}
          <button onClick={submitHandler}>submit</button>
        </div>
      )}
    </Consumer>
  );
};
