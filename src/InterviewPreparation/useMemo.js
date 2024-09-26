import { useState, useMemo, useEffect } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [fact, setFact] = useState(10);
  const updateCount = (event) => {
    setCount(count + 1);
  };

  //   this is with out useMemo
  //   const displayFact = () => {
  //     return computeValue(fact);
  //   };

  //   usememo will take 2 arguments

  const displayFact = useMemo(() => {
    return computeValue(fact);
  }, [fact]);

  return (
    <>
      <div>Understanding Use memo</div>
      <div>{count}</div>
      {/* <div>{displayFact()}</div> */}
      <div>{displayFact}</div>
      <button onClick={updateCount}>click me</button>
    </>
  );
}
const computeValue = (value) => {
  console.log("compute factorial called");
  // computing factorial
  // if this is highly costly operation. then on every dom update this gets called
  return value * 1000;
};

// even through displayFact, updateCount are independent. if we update count then
// displayfact is calling. and it is having high computing operarion.
// to avoid unnecessary computations. we use useMemo.

// useMemo:
// ----------
// 1. computation happens only if dependency changes
// 2. useMemo will run during the render of the component

// useEffect:
// ----------
// 1. computation happens only if dependency changes
// 2. useEffect will run after the render of the component
