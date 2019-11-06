import React from "react";
import "../../App.css";
// const Display = () => {
//   return <div className="display">{/* Display any props data here */}</div>;
// };

const Display = (props) => {
  return (
    <div className="display">{props.number? props.number : "0"}</div>
  )
};

Display.defaultProps = {
  number: 0,
}

export default Display; 