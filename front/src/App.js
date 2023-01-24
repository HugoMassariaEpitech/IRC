import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Home name={Math.random} />
    </>
  );
}

export default App;