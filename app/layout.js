// "use client";
import "./globals.css";
import Image from "next/image";
import Head from "./head";
import Nav from "./nav";

import {
  Inter,
  Gorditas,
  Oswald,
  Frijole,
  Island_Moments,
} from "next/font/google";
// use context to keep track of which card was doubleClicked, and which card is currently selected
import AppContext from "./appContext";
import MusicPlayer from "./musicplayer";
import HelpTips from "./helpTips";
import ZoomSelection from "./zoomSelection";

export const gorditas = Gorditas({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gorditas",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-oswald",
});

export const frijole = Frijole({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-frijole",
});

export const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-island-moments",
  color: "text-slate-100",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const song1 = "./music/frozen.mp3";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />

      <body className="bg-slate-800">
        <Nav />
        {children}
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
            <MusicPlayer src="/music/frozen.mp3" />
            <button className="z-10 text-slate-200 bg-slate-600 rounded-lg hover:bg-slate-300 transition-colors duration-200 p-1">
              Sound on/off 🔈
            </button>
          </div>
        </footer>
      </body>
    </html>
  );
}
