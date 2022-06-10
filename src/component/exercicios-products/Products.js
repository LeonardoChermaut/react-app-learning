import React from "react";
import Product from "./Product";
import Tittle from "./Tittle";

const Products = () => {
  const products = [
    { name: "Notebook", propers: ["16gb ram", "512gb"] },
    { name: "Smarthphone", propers: ["12gb ram", "1tb"] },
  ];
  return (
    <section>
      <Tittle text="Products" />
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </section>
  );
};

export default Products;
