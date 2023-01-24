import React from "react";

export default function PrivateChannel(props) {
    return (
        <li>
            <a className="flex p-2 rounded-lg hover:bg-[#1e2124] cursor-pointer" key="Hugo" onClick={props.ChangeUser}>
                <div className="relative">
                    <img className="w-10 h-10 rounded-full bg-[#282b30]" src={`https://placeimg.com/${Math.floor(Math.random()*200)}/${Math.floor(Math.random()*200)}/people`}></img>
                    <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-gray-800 rounded-full"></span>
                </div>
                <div className="font-base text-white ml-3 hidden lg:block">
                    <div className="truncate">{props.name}</div>
                    <div className="truncate text-xs text-gray-400">{props.lastMessage}</div>
                </div>
            </a>
        </li>
    );
}