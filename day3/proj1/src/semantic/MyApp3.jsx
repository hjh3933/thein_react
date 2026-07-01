import React, { useEffect, useRef, useState } from "react";

const MyApp3 = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>현재 값: {inputValue}</h2>
      <h2>이전 값: {previousInputValue.current}</h2>
    </>
  );
};

export default MyApp3;
