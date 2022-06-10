import React from "react";

const Modal = ({ modal }) => {
  if (modal === true) {
    return <div>List of Products Avaible</div>;
  } else {
    return null;
  }
};

export default Modal;
