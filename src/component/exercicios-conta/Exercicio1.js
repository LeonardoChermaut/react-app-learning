import React from "react";

const luana = {
  client: "Luana",
  birthDate: 27,
  buy: [
    { name: "Notebook", preco: "R$ 2500" },
    { name: "Geladeira", preco: "R$ 3000" },
    { name: "Smarthphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  client: "Mario",
  birthDate: 35,
  buy: [
    { name: "Drone", preco: "R$ 2500" },
    { name: "Moto", preco: "R$ 5000" },
    { name: "Smarthhone", preco: "R$ 3000" },
  ],
  ativa: false,
};

const dados = luana;

//Filtrar array e transformar string
const total = dados.buy
  .map((item) => Number(item.preco.replace("R$ ", "")))
  .reduce((a, b) => a + b);

//Alterar props para reutilização ↓
const Title = ({ color, text, children }) => {
  return (
    <h1 style={{ color: color }}>
      {text},{children}
    </h1>
  );
};

const Exercicio1 = () => {
  return (
    <div>
      <Title color="red" text="My title one">
        This os children.
      </Title>

      <h1 style={{ textAlign: "center" }}>Exercício 1</h1>
      <p>Name: {dados.client}</p>
      <p>Idade: {dados.birthDate}</p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total Gasto: {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};
export default Exercicio1;
