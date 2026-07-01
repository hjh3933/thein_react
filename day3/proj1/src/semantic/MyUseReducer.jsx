import React, { useReducer } from "react";

const initialScore = [
  {
    id: 1,
    score: 0,
    name: "John",
  },
  {
    id: 2,
    score: 0,
    name: "Sally",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
};

const MyUseReducer = () => {
  // [데이터담는 state, dispatch 메서드] = (첫번째 요소 reducer, 두번째 요소 초기데이터(보통 객체,배열), 새번째 요소 초기값(선택))
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };
  return (
    <>
      {score.map((player) => (
        <div key={player.id}>
          <label>
            <input
              type="button"
              value={player.name}
              onClick={() => handleIncrease(player)}
            />
            {player.score}
          </label>
        </div>
      ))}
    </>
  );
};

export default MyUseReducer;
