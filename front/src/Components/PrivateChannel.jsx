import React from "react";

export default function PrivateChannel() {
    return (
        <li>
            <a class="flex p-2 rounded-lg hover:bg-[#1e2124] cursor-pointer">
                <div class="relative">
                    <img class="w-10 h-10 rounded-full bg-[#282b30]" src="https://placeimg.com/190/190/people"></img>
                    <span class="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-gray-800 rounded-full"></span>
                </div>
                <div class="font-base text-white ml-3 hidden lg:block">
                    <div class="truncate">Hugo Massaria</div>
                    <div class="truncate text-xs text-gray-400">Joined in August 2014</div>
                </div>
            </a>
        </li>
    );
}