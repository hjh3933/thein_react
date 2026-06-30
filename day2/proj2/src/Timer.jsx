import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>1초마다 카운트 {count} 반영</h1>;
}
