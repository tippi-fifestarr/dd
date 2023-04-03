"use client";
import Nav from "./nav";
// import Tooltips from "./tooltips";
import Cards from "./cards";
import { useState, useEffect } from "react";
import MusicPlayer from "./musicplayer";
import HelpTips from "./helpTips";
import ZoomSelection from "./zoomSelection";
import { gorditas, oswald, frijole, islandMoments } from "./layout";

export default function Home() {
  const song1 = "./music/frozen.mp3";

  const [chosenCard, setChosenCard] = useState({
    name: "none",
    id: 0,
    profile_path: "",
    description: "dadeuce",
  });

  useEffect(() => {
    console.log("chosenCard", chosenCard);
  }, [chosenCard.name]);

  return (
    <>
      <main>
        <Nav chosenCard={chosenCard} />
        <Cards
          chosenCard={chosenCard}
          setChosenCard={setChosenCard}
          className="items-center"
        />
      </main>
      <footer className="my-2 text-center transition-colors duration-200">
        <div className="">
          <ul className="flex flex-row justify-between px-5 sm:text-xl">
            <li className="flex">
              <a className="text-blue-200 hover:bg-blue-600" href="/">
                Home
              </a>
            </li>
            <li
              className={
                gorditas.className + " text-slate-300 hover:bg-slate-500 flex"
              }
            >
              <a href="/about">About</a>
            </li>
            <li
              className={`${islandMoments.className} text-slate-300  hover:bg-slate-600 text-2xl`}
            >
              <a href="/contact">Contact</a>
            </li>
            <li
              className={
                frijole.className + " flex text-slate-300 hover:bg-slate-700"
              }
            >
              <a href="/kickstart">Kickstart</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around">
          <ZoomSelection />
          <HelpTips />
          <MusicPlayer src={song1} />
          <button className="z-10 text-slate-200 bg-slate-600 rounded-lg hover:bg-slate-300 transition-colors duration-200 p-1">
            Sound on/off 🔈
          </button>
        </div>
      </footer>
    </>
  );
}
