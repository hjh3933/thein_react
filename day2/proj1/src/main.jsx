import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Header from "./semantic/Header.jsx";
import Footer from "./semantic/Footer.jsx";
import MyUseState from "./semantic/MyUseState.jsx";
import MyApp from "./semantic/MyApp.jsx";
import Board from "./TicTacToe/Game.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <h3>컴포넌트 각각 상태값</h3>
    <MyUseState />
    <MyUseState />
    <hr />
    <h3>상태값을 공유</h3>
    <MyApp />
    <hr />
    <h3>틱택토 게임</h3>
    <Board />
    <Footer />
    {/* <App /> */}
  </StrictMode>,
);
