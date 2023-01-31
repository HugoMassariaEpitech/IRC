import React from "react";
import "../index.css";

export default function SingleChat(props) {
    return (
        <div className="mt-3 p-2 flex hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="relative">
                <img className="rounded-full w-12 h-12 bg-gray-200" src={props.avatarURL}></img>
                <div className="bg-green-500 h-3 w-3 absolute rounded-full border-2 border-white right-0 bottom-1"></div>
            </div>
            <div className="flex-auto ml-2 flex flex-col">
                <div className="font-medium">{props.nickName}</div>
                <div className="font-light mt-auto text-gray-400">{props.lastMessage}</div>
            </div>
        </div>
    );
}