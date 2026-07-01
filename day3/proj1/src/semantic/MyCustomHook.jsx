import React from "react";
import useFetch from "./useFetch";

const MyCustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      {/* &&: 앞의 값이 있을때만 뒤의 코드 실행 */}
      {/* ||: 앞의 값이 false면 뒤의 값 실행 */}
      <p>커스텀 훅 사용</p>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default MyCustomHook;
