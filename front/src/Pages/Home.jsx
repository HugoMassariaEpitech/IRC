import React, { useState, useEffect }  from "react";
import "../index.css";
import Logo from "../Assets/Logo.png"
import socketIOClient from "socket.io-client";
import PrivateChannel from "../Components/PrivateChannel";
import ChatStart from "../Components/ChatStart";

const socket = socketIOClient("http://localhost:5000");

export default function Home() {
    const [allUsers, setUsers] = useState([]);
    const [allMessages, setMessages] = useState([]);
    useEffect(() => {
      socket.on("New User", (Users) => {
        delete Users[socket.id];
        setUsers(Users);
      });
    }, []);
    useEffect(() => {
        socket.on("Message Received", (Message) => {
            const allMessagesCopy = [...allMessages];
            allMessagesCopy.push({"Hugo": {"type": "Received", "message": Message}})
            setMessages(allMessagesCopy);
        });
      }, []);
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            socket.emit("Message", event.target.value);
        }
    };
    return (
        <body className="absolute h-full w-full flex">
            <aside className="h-full w-1/5 border-r border-[#1e2124] bg-[#282b30]">
                <div className="px-3 py-4 bg-[#282b30] overflow-y-auto h-full">
                    <a className="flex items-center pl-2.5 mb-5">
                        <img className="w-10 h-10" src={Logo}></img>
                    </a>
                    <ul className="space-y-2">
                        {
                            Object.values(allUsers).map((values, ID) => {
                                return (
                                    <PrivateChannel name="Hugo Massaria" lastMessage="Salut !"/>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
            <div className="h-full flex-1 bg-[#36393e] flex flex-col">
                <div className="h-16">

                </div>
                <div className="flex-auto p-3">
                {
                    Object.values(allMessages).map((values, ID) => {
                        // console.log(values);
                        return (
                            <PrivateChannel name="Hugo Massaria" lastMessage="Salut !"/>
                        )
                    })
                }
                </div>
                <div className="p-3">
                    <input onKeyDown={handleKeyDown} className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-[#424549] dark:placeholder-gray-400 dark:text-white" placeholder="Envoyer un message ..." required></input>
                </div>
            </div>
        </body>
    );
}