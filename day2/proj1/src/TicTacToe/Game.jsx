import React, { useState } from "react";
import "../style.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    // 이미 값이 있다면(유저가 땅을 먹음, null이 아님 true)
    if (squares[i]) {
      return;
    }
    // 승자 결정하기
    const nextSquares = squares.slice(); // slice() 배열 복사해서 새 배열 생성
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// 승리조건에 해당하는지 검증하는 함수
function calculateWinner(squares) {
  // 승리하는 인덱스 경우의 수, 가로3줄, 세로 3줄, 대각선 2줄
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // 승리조건을 하나씩 가져와서
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // 승리조건인덱스에 해당하는 squares의 값(XorO)이 3개가 일치하는지 검증한다
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // 일치하면 어떤 값이 승자인지 return한다
      return squares[a];
    }
  }
  return null; // 승자 없음
}
