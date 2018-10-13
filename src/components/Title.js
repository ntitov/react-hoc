import React from "react";
import stateLog from "./StateLog.jsx";

const Title = props => {
  return <h1>{props.name}</h1>;
};

export default stateLog(Title);
