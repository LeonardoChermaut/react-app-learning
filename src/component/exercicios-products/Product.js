import React from "react";

const Product = ({ name, propers }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <p>{name}</p>
      <ul>
        {propers.map((proper) => (
          <li>{proper}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
