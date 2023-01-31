import React, { useState, useEffect } from "react";
import axios from "axios";
import Connexion from "./Pages/Connexion";
import Chat from "./Pages/Chat";
import { data } from "autoprefixer";
import {socket} from "./Service/Socket";

function App() {
  const [isConnected, setConnected] = useState(false);
  const [Banner, setBanner] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/auth/signin", {uid: event.target.getElementsByTagName("input")[0].value, password: event.target.getElementsByTagName("input")[1].value}).then((result) => {
      if (result.status == 200) {
        console.log(result);
        socket.emit("Users", {[socket.id] : {nickname: result.data.nickname, avatar: result.data.avatar, uid: result.data.uid}});
        setConnected(true);
      } else {
        setBanner(result.data.message);
      }
    });
  }
  return (
    <>
      {
        isConnected ? <Chat /> : <Connexion handleSubmit={handleSubmit} Banner={Banner}/>
      }
    </>
  );
}

export default App;