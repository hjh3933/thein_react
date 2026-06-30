import React, { useState } from "react";
import MyUseState2 from "./MyUseState2";

const MyApp = () => {
  const [cnt, setCnt] = useState(0);

  function handleClk() {
    setCnt(cnt + 1);
  }
  return (
    <div>
      <MyUseState2 cnt={cnt} handleClk={handleClk} />
      <MyUseState2 cnt={cnt} handleClk={handleClk} />
    </div>
  );
};

export default MyApp;
