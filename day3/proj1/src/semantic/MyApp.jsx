import React, { useEffect, useRef, useState } from "react";

const MyApp = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <p>타입: </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h3>렌더링 횟수 {count.current}</h3>
    </div>
  );
};

export default MyApp;
