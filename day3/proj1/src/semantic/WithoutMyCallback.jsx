import React, { useState } from "react";

// memo를 사용했음에도 handleClick1,2 함수가 렌더링 될때 새로 만들어짐(다른 주소에 복사됨)
// 그래서 1번버튼 눌러도 2번도 리렌더링됨, 이런식으로 비효율적으로 작동함
const Button = React.memo(({ onClick, text }) => {
  alert(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

const WithoutMyCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  alert("Parent rendered");

  return (
    <div>
      <h2>Without useCallback: </h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
};

export default WithoutMyCallback;
