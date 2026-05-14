import React, { useState, useEffect } from "react";

const Debouncing = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("call api from here", query)
    }, 500);

    // ✅ proper cleanup
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return (
    <>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <p>Query: {query}</p>
    </>
  );
};

export default Debouncing;
