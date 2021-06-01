import { useState, useEffect } from "react";
const Title = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("use effect");
  }, [value]);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};
export default Title;
