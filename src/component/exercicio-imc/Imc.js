import React from "react";

const Imc = (e) => {
  const [peso, setPeso] = React.useState(0);
  const [altura, setAltura] = React.useState(0);
  const [imc, setImc] = React.useState(0);

  const changePeso = (e) => {
    setPeso(e.target.value);
  };

  const changeAltura = (e) => {
    setAltura(e.target.value);
  };
  return (
    <div>
      <h1>Calculadora IMC</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setImc(peso / (altura * altura));
        }}
      >
        <label for="peso">Peso: </label>
        <br />
        <input id="peso" type={"number"} step={"0.1"} onChange={changePeso} />
        <br />
        <p />
        <label for="altura">Altura: </label>
        <br />
        <input
          id="altura"
          type={"number"}
          step={"0.1"}
          onChange={changeAltura}
        />
        <br />
        <button>Calcular</button>
      </form>
      <h2>O seu IMC é: {imc}</h2>
    </div>
  );
};

export default Imc;
