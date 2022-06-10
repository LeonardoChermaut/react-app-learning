import React from "react";
import Header from "../exercicios-products/Header";
import Home from "../exercicios-products/Home";
import Products from "../exercicios-products/Products";

const Exercicio3 = () => {
  const { pathname } = window.location;
  let Page = Home;

  if (pathname === "/Products") {
    Page = Products;
  } else {
    Page = Home;
  }
  return (
    <section>
      <Header />
      <Page />
    </section>
  );
};

export default Exercicio3;
