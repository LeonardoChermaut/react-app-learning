import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const arr = ["Item 1", "Item 2"];
  return (
    <form>
      <p>
        <Input id="email" label="Email" required />
      </p>
      <p>
        <Input id="password" label="Senha" type="password" />
      </p>
      <Button items={arr} />
    </form>
  );
};

export default Form;
