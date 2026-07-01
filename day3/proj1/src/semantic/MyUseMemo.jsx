import React, { useMemo, useState } from "react";

const MyUseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // (함수, 의존성) => 이제 []값이 변할때만 함수가 실행된다, 다른 렌더링과는 상관X
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  return (
    <div>
      <div>
        <h2>나의 Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Todo 추가하기</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>무거운 함수</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("계산중...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default MyUseMemo;
