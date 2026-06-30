import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

export default function Timer2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <h1>{count}번째 렌더링</h1>;
}
