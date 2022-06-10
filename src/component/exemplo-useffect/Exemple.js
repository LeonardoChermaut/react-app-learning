import React from "react";

const Exemple = () => {
  const [contar, setContar] = React.useState(0);

  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/notebook`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect(() => {
    console.log("Executed");
  }, []);

  React.useEffect(() => {
    document.title = "Hello World";
  }, []);
  return (
    <>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <h3>{dados.preco}</h3>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default Exemple;
