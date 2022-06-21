import React from "react";

const Axios = () => {
  const [list, setList] = React.useState([]);
  const listAll = async () => {
    var res = await Axios.get("https://localhost:8080/materias");
  };

  return <div>Axios</div>;
};

export default Axios;
