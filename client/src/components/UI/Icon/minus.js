import React from "react";

export const Minus = (props) => {
  const styles = {
    backgroundColor: "white",
    color: "#fb246a",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "2px solid #fb246a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  const minus = {
    width: "60%",
    height: "2px",
    backgroundColor: "#fb246a",
  };
  return (
    <div style={styles} onClick={props.click}>
      <div style={minus}></div>
    </div>
  );
};
