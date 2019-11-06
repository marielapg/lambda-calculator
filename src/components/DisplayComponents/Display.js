import React from "react";

// const Display = () => {
//   return <div className="display">{/* Display any props data here */}</div>;
// };

const Display = (props) => {
  return (
    <div className="display-container">{props.number}{props.operators}</div>
  )
};

Display.defaultProps = {
  number: 0,
}

export default Display; 