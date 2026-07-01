import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MyApp from "./semantic/MyApp";
import MyApp2 from "./semantic/MyApp2";
import MyApp3 from "./semantic/MyApp3";
import Footer from "./semantic/Footer";
import Header from "./semantic/Header";
import MyUseReducer from "./semantic/MyUseReducer";
import WithoutMyCallback from "./semantic/WithoutMyCallback";
import MyUseCallback from "./semantic/MyUseCallback";
import WithoutMyUseMemo from "./semantic/WithoutMyUseMemo";
import MyUseMemo from "./semantic/MyUseMemo";
import WithoutMyCustomHook from "./semantic/WithoutMyCustomHook";
import MyCustomHook from "./semantic/MyCustomHook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <h1>useRef</h1>
      <MyApp />
      <hr />
      <MyApp2 />
      <hr />
      <MyApp3 />
      <hr /> */}
      {/* <h1>useReducer</h1>
      <MyUseReducer /> */}
      <h1>useCallback</h1>
      {/* <WithoutMyCallback /> */}
      {/* <MyUseCallback /> */}
      <h1>useMemo</h1>
      {/* <WithoutMyUseMemo /> */}
      {/* <MyUseMemo /> */}
      <h1>customHook</h1>
      {/* <WithoutMyCustomHook /> */}
      <MyCustomHook />
      <Footer />
    </>
  );
}

export default App;
