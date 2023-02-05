import React, { useState, useEffect } from "react";
import "../index.css";
import SingleChat from "../Components/SingleChat";
import MessageIn from "../Components/MessageIn";
import MessageOut from "../Components/MessageOut";
import { socket } from "../Service/Socket";
import axios from "axios";
import { Socket } from "socket.io-client";

export default function Channel(props) {
    return (
        <div class="bg-white overflow-hidden flex-1 flex text-black">
            <div class="h-full w-16 bg-white flex flex-col border-r p-2">
                <div class="justify-center flex aspect-square rounded-md items-center hover:bg-gray-100 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-7 text-gray-400" fill="currentColor"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" /></svg>
                </div>
                <div class="justify-center flex aspect-square rounded-md items-center bg-gray-100 mt-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-7 text-black" fill="currentColor"><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
                </div>
            </div>
            <div class="h-full w-1/4 bg-white flex flex-col border-r p-4">
                <div class="text-2xl font-semibold flex">Groups
                    <div class="h-full aspect-square bg-gray-100 ml-auto rounded-full flex justify-center items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-3 text-black" fill="currentColor"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                    </div>
                </div>
                <div class="mt-3 p-2 flex hover:bg-gray-100 rounded-lg cursor-pointer">
                    <div class="relative flex">
                        <img class="rounded-full w-12 h-12 bg-gray-200" src="https://randomuser.me/api/portraits/men/8.jpg"></img>
                        <div class="rounded-full w-12 h-12 bg-gray-200 -translate-x-1/3 flex items-center justify-center text-gray-500">+3</div>
                    </div>
                    <div class="flex-auto flex flex-col">
                        <div class="font-medium">EPITECH</div>
                        <div class="font-light mt-auto text-gray-400">Dernier message reçu</div>
                    </div>
                </div>
            </div>
            <div class="h-full bg-white flex flex-col border-r w-2/5 p-4">
                <div class="text-2xl font-normal">EPITECH</div>
                <div class="flex-auto mt-4 flex flex-col">
                    <div class="flex">
                        <div class="flex flex-col">
                            <img class="rounded-full w-6 h-6 bg-gray-200 mt-auto" src="https://randomuser.me/api/portraits/men/8.jpg"></img>
                        </div>
                        <div class="bg-gray-200 w-2/3 ml-2 p-3 rounded-2xl font-light">Salut Hugo ! Comment vas-tu ?</div>
                    </div>
                    <div class="flex mt-2">
                        <div class="bg-[#0695FF] w-2/3 p-3 rounded-2xl text-white ml-auto mr-2 font-light">Salut Hugo ! Comment vas-tu ?</div>
                        <div class="flex flex-col">
                            <img class="rounded-full w-6 h-6 bg-gray-200 mt-auto" src="https://randomuser.me/api/portraits/men/8.jpg"></img>
                        </div>
                    </div>
                </div>
                <form class="flex mt-4">
                    <input class="bg-gray-100 border text-sm rounded-lg block flex-auto p-2.5" placeholder="Entrez votre message ..." required />
                    <button type="submit" class="text-gray-400 font-medium rounded-lg text-sm text-center bg-gray-100 p-2.5 ml-2">Envoyer</button>
                </form>
            </div>
            <div class="h-full flex-1 bg-white flex flex-col">

            </div>
        </div>
    );
}