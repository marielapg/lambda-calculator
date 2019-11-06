import React from "react";

// const SpecialButton = () => {
  const SpecialButton = (props) => {
    return (
      <>
        <button onClick={() => {
          props.addSpecial(props.text)
        }} className="special-button">
          {props.text}
        </button>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;