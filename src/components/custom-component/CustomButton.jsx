import React from "react";

const CustomButton = ({ name, type, onClick }) => {
  return (
    <>
      <button className="customButton" type={type} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default CustomButton;
