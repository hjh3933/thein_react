import React, { useState } from "react";

const MyUseState2 = ({ cnt, handleClk }) => {
  return (
    <>
      <button onClick={handleClk}> {cnt}번 클릭 중</button>
    </>
  );
};

export default MyUseState2;
