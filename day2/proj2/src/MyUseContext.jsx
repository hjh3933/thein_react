import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();
const MyUseContext = () => {
  const [user, setUser] = useState("Linus");
  return (
    <div>
      {/* 이제 이 tree의 모든 컴포넌트가 user를 사용할 수 있다! props 안넘겨도 가능 */}
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default MyUseContext;
