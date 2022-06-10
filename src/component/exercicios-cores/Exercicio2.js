import React from "react";
import Footer from "../Footer";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "R$ 2015",
    color: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    name: "Notebook",
    price: "R$ 3400",
    color: ["#ff5649", "#2944", "#fe5597"],
  },
  {
    id: 3,
    name: "Tablet",
    price: "R$ 4500",
    color: ["#ffd9", "#2017", "#218"],
  },
];

//Alterar array de string pra number
const App2 = () => {
  const dados = products.filter(
    ({ price }) => Number(price.replace("R$ ", "")) > 1500
  );
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Exercício 2</h1>
      {dados.map(({ id, name, price, color }) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>{price}</p>
          <ul>
            {color.map((color) => (
              <li
                style={{ backgroundColor: color, color: "white" }}
                key={color}
              >
                {color}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default App2;
