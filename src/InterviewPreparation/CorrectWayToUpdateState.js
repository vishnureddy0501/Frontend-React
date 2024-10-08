import { useState } from "react";

const Revision = () => {
  const [state, setState] = useState({
    name: "John Doe",
    age: 25,
    company: "TechCorp",
  });

  const incrementAge = () => {
    setState((prevState) => ({
      ...prevState,
      age: prevState.age + 1,
    }));
  };

  return (
    <>
      <div>{`Name: ${state.name}`}</div>
      <div>{`Age: ${state.age}`}</div>
      <div>{`Company: ${state.company}`}</div>
      <button onClick={incrementAge}>Increment Age</button>
    </>
  );
};

export default Revision;
