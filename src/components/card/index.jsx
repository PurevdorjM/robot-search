import React from "react";

import "./style.css";

export const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`}
      alt=""
    />
    <h2>Нэр: {props.robot.name}</h2>
    <h2>Хэрэглэгчийн нэр: {props.robot.username}</h2>
    <p>Цахим шуудан: {props.robot.email}</p>
    <p>Утас: {props.robot.phone}</p>
  </div>
);
