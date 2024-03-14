import React from "react";
import "./style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.robot.id}?set2&size=160x160`}
      alt="Robot"
    />
    <h4>{props.robot.name}</h4>
    <p>{props.robot.address.street}</p>
  </div>
);
