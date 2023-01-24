import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import socketIOClient from "socket.io-client";

function App() {
  const [state,setState]=useState("");
  useEffect(() => {
    const socket = socketIOClient("http://localhost:5000");
    
  }, []);
  return (
    <>
      <Home name={state} />
    </>
  );
}

export default App;