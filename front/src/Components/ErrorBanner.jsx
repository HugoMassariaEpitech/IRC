import React from "react";
import "../index.css";

export default function ErrorBanner(props) {
    return (
        <div class="absolute w-1/3 h-full right-0 mr-10 flex flex-col">
            <div class="flex p-4 bg-red-400 rounded-lg" role="alert">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div class="ml-3 flex flex-col justify-center items-center">
                    <div class="text-sm font-medium text-white">{props.message}</div>
                </div>
                <div class="ml-auto hover:bg-red-300 h-full aspect-square rounded-md flex justify-center items-center cursor-pointer">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    );
}