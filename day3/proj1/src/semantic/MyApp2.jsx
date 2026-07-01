import React, { useRef } from "react";

const MyApp2 = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>input에 포커스</button>
    </>
  );
};

export default MyApp2;
