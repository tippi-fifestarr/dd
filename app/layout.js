// "use client";
import "./globals.css";
import Image from "next/image";
import Head from "./head";
import {
  Inter,
  Gorditas,
  Oswald,
  Frijole,
  Island_Moments,
} from "next/font/google";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />

      <body className="bg-slate-800">
        <nav className="border-solid bg-slate-500 rounded text-slate-100">
          <div className="flex space-x-5 justify-between items-center mx-5 mb-2 object-none">
            {/* <Image src= /> */}
            <Image
              src="/favicondd.ico"
              alt="dadeuce favicon"
              width={55}
              height={55}
              className="rounded-full items-center p-1"
            />
            <h1
              className={`text-2xl ${gorditas.className} font-bold hover:underline`}
            >
              DaDeuce!?
            </h1>
            <Image
              src="/images/dadeuce.png"
              alt="dadeuce logo"
              width={55}
              height={55}
              className="rounded items-center p-2"
            />
          </div>
        </nav>
        {children}
        <footer className="my-2 text-center transition-colors duration-200">
          <div className="">
            <ul className="flex flex-row justify-between px-5 sm:text-xl">
              <li className="flex">
                <a className="text-blue-200" href="/">
                  Home
                </a>
              </li>
              <li className={gorditas.className + " flex"}>
                <a href="/about">About</a>
              </li>
              <li className={`${islandMoments.className}  hover:bg-slate-800`}>
                <a href="/contact">Contact</a>
              </li>
              <li className={frijole.className + " flex"}>
                <a href="/kickstart">Kickstart</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-around">
            <button className="z-10 text-slate-100 bg-slate-400 rounded-lg hover:bg-slate-300 transition-colors duration-200 p-1">
              Zoom selection on/off 👓
            </button>
            <button className="z-10 text-slate-200 bg-slate-600 rounded-lg hover:bg-slate-300 transition-colors duration-200 p-1">
              Help Tips! 🤩
            </button>
            <button className="z-10 text-slate-100 bg-slate-400 rounded-lg hover:bg-slate-300 p-1">
              Music on/off 🎵
            </button>
            <button className="z-10 text-slate-200 bg-slate-600 rounded-lg hover:bg-slate-300 transition-colors duration-200 p-1">
              Sound on/off 🔈
            </button>
          </div>
        </footer>
      </body>
    </html>
  );
}
