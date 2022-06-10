import "./component/exercicio-api/Style.css";
import React from "react";
import Product from "./component/exercicio-api/Product";

const App = () => {
  const [dados, setDados] = React.useState(null);

  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    console.log(json);
    setLoading(false);
  }

  return (
    <>
      <button className="myButton" onClick={handleClick}>
        Notebook
      </button>
      <button className="myButton" onClick={handleClick}>
        Smartphone
      </button>

      <button className="myButton" onClick={handleClick}>
        Tablet
      </button>
      {dados && <Product dados={dados} />}
      {loading && <p>Loading...</p>}
      {!loading && dados && <Product dados={dados} />}
    </>
  );
};

export default App;
