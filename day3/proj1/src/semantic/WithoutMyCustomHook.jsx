import React, { useEffect, useState } from "react";

const WithoutMyCustomHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json().then((data) => setData(data)),
    );
  }, []);
  return (
    <>
      <p>커스텀 훅 없이 사용</p>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default WithoutMyCustomHook;
