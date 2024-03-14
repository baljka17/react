import React, { useState } from "react";

export const CoolButton = (props) => {
  const [comments, setComments] = useState(["one", "two"]);
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    console.log(props.comment);
    setCount(count + 1);
    setComments([...comments, props.comment]);
  };

  return (
    <div>
      <input
        type="button"
        value={props.text ? count + ") " + props.text : "Коммент орууул"}
        onClick={clickHandler}
      />

      <br />
      {comments.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
};
