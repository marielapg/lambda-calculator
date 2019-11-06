import React from "react";

// const OperatorButton = () => {
  const OperatorButton  =(props) => {
  return (
    <>
    <button onClick={() =>
         props.addOperator(props.text.value)} className="operator-button">{props.text.char}
         </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default OperatorButton;