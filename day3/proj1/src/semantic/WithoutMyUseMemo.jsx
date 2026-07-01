import React, { useState } from "react";

const WithoutMyUseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // 리렌더링될때마다 10억번 돌리는 함수가 실행됨
  const calculation = expensiveCalculation(count);

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
        {/* 문제는 이걸 눌러도 반복된다는 것임 */}
        <button onClick={addTodo}>Todo 추가하기</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>무거운 함수</h2>
        {calculation}
        <p>Todo 버튼을 클릭해도 리렌더링으로 인한 버벅임 발생</p>
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

export default WithoutMyUseMemo;
