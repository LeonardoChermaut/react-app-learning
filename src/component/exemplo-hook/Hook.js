import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const Hook = () => {
  // Alterar tipo ativo
  const [active, setActive] = React.useState(false);

  //Alterar Modal
  const [modal, setModal] = React.useState(false);

  //Efeito colateral
  const [contar, setContar] = React.useState(1);

  const [items, setItems] = React.useState(["Item1"]);

  function handleClick() {
    setActive(!active);
    setContar(contar + 1);
    setItems((items) => [...items, "Item" + (contar + 1)]);
  }

  return (
    <>
      {modal ? "Hello, User." : "Products"}
      <div>
        <Modal modal={modal} setModal={setModal} />
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <ButtonModal setModal={setModal} />
      </div>
      <div>
        <button onClick={handleClick}>{contar}</button>
      </div>
    </>
  );
};

export default Hook;
