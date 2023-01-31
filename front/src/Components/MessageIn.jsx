import React from "react";
import "../index.css";

export default function MessageIn(props) {
    return (
        <div className="flex">
            <div className="flex flex-col">
                <img className="rounded-full w-6 h-6 bg-gray-200 mt-auto" src={props.avatarURL}></img>
            </div>
            <div className="bg-gray-200 w-2/3 ml-2 p-3 rounded-2xl font-light">{props.message}</div>
        </div>
    );
}