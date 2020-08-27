import React from "react";

export const InputElement = (props) => {
  return (
    <input
      type="text"
      name="skills[]"
      onChange={props.change}
      value={props.skill}
    />
  );
};
