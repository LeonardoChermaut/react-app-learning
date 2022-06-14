import React from "react";

const Product = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.preco}</h2>
      <h3>{props.descricao}</h3>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Product;
