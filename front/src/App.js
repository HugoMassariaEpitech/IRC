import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import socketIOClient from "socket.io-client";

function App() {
  const RefreshPage = useState(null);
  useEffect(() => {
    const socket = socketIOClient("http://localhost:5000");
    socket.on("New User", (message) => {
      console.log(message);
      RefreshPage({fromSelf: false, messages: "msg"});
    });
  }, []);
  return (
    <>
      <Home name={Math.random()} />
    </>
  );
}

export default App;