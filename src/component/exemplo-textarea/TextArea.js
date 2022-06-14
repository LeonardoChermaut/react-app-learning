import React from "react";

const TextArea = () => {
  const [textarea, setTextarea] = React.useState("");

  return (
    <form>
      <textarea
        name={textarea}
        onChange={({ target }) => setTextarea(target.value)}
      ></textarea>
      {textarea}
    </form>
  );
};

export default TextArea;
