import React from "react";
import { Input, Label } from "../Styles";

const Checkbox = () => {
  const [termos, setTermos] = React.useState(null);

  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setTermos([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      <form>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            hecked={cores.includes("vermelho")}
            onChange={handleChange}
          />
          Vermelho
        </label>
        <label>
          <input
            type="checkbox"
            value="verde"
            hecked={cores.includes("verde")}
            onChange={handleChange}
          />
          Verde
        </label>
      </form>
    </>
  );
};

export default Checkbox;
