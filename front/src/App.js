import React, { useState, useEffect } from "react";
import axios from "axios";
import Connexion from "./Pages/Connexion";
import Chat from "./Pages/Chat";
import { data } from "autoprefixer";
import {socket} from "./Service/Socket";

function App() {
  const [isConnected, setConnected] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/auth/signin", {uid: "Massaria#1", password: "Sniperking59!"}).then((result) => {
      if (result.status == 200) {
        socket.emit("New Connexion", "Hugo Massaria");
        setConnected(true);
      }
    });
  }
  return (
    <>
      {
        isConnected ? <Chat /> : <Connexion handleSubmit={handleSubmit}/>
      }
    </>
  );
}

export default App;