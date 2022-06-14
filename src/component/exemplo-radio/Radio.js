import React from "react";
import { Input, Label } from "../Styles";

const Radio = () => {
  const [produto, setProduto] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      {produto}
      <label>
        <input
          type="radio"
          name="smartphone"
          checked={produto === "smartphone"}
          value="smartphone"
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          name="notebook"
          checked={produto === "notebook"}
          value="notebook"
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          name="tablet"
          checked={produto === "tablet"}
          value="tablet"
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
};

export default Radio;
