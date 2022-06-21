import React from "react";

const Checkbox = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
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
