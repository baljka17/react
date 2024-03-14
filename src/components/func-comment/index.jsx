import React, { useState } from "react";
import { CoolButton } from "../cool-button";
export const FuncComponent = (props) => {
  const [state, setState] = useState("");
  const [comments, setComments] = useState(["one", "two"]);
  const toWrite = (e) => {
    setState(e.target.value);
  };
  return (
    <div>
      {state}
      <br />
      <textarea className="myTextArea" onChange={toWrite}></textarea>
      <br />
      <CoolButton text={props.text} comment={state} />
    </div>
  );
};
