import React from "react";
import "../index.css";

export default function MessageOut(props) {
    return (
        <div className="flex mt-2">
            <div className="bg-[#0695FF] w-2/3 p-3 rounded-2xl text-white ml-auto mr-2 font-light">{props.message}</div>
            <div className="flex flex-col">
                <img className="rounded-full w-6 h-6 bg-gray-200 mt-auto" src={props.avatarURL}></img>
            </div>
        </div>
    );
}