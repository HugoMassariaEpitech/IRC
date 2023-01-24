import React, { useState, useEffect }  from "react";
import "../index.css";
import Logo from "../Assets/Logo.png"
import socketIOClient from "socket.io-client";

<<<<<<< HEAD
export default function Home({name}) {
=======
export default function Home(props) {
    const RefreshPage = useState(null);
    useEffect(() => {
      const socket = socketIOClient("http://localhost:5000");
      socket.on("New User", (message) => {
        console.log(message.Welcome);
        // RefreshPage({fromSelf: false, messages: "msg"});
      });
    }, []);
>>>>>>> bf0f2fcb395f678970a923f08c359cd6345c2032
    return (
        <body className="absolute h-full w-full flex">
            <aside className="h-full w-1/5 border-r border-[#1e2124] bg-[#282b30]">
                <div className="px-3 py-4 bg-[#282b30] overflow-y-auto h-full">
                    <a className="flex items-center pl-2.5 mb-5">
                        <img className="w-10 h-10" src={Logo}></img>
                    </a>
                    <ul className="space-y-2">
                        {
                            
                        }
                    </ul>
                </div>
            </aside>
            <div className="h-full flex-1 bg-[#36393e] flex flex-col">{name}</div>
        </body>
    );
}