import React from "react";
import Modal from "./Modal";

const ButtonModal = ({ setModal }) => {
  function handleClick() {
    setModal((ativo) => !ativo);
  }

  return (
    <>
      <button onClick={handleClick}>Abrir</button>
      <button onClick={handleClick}>Fechar</button>
    </>
  );
};

export default ButtonModal;
