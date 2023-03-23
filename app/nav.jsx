"use client";
import { gorditas } from "./layout";
import Image from "next/image";

export default function Nav(chosenCard, cardChosen, imagePath) {
  return (
    <nav className="border-solid bg-slate-500 rounded text-slate-100">
      <div className="flex space-x-5 justify-between items-center mx-5 mb-2 object-none">
        {/* <Image src= /> */}
        {!cardChosen ? (
          <Image
            src={imagePath + chosenCard.profile_path}
            alt="chosen card"
            width={55}
            height={55}
            className="rounded-full items-center p-1"
          />
        ) : (
          <Image
            src="/favicondd.ico"
            alt="dadeuce favicon"
            width={55}
            height={55}
            className="rounded-full items-center p-1"
          />
        )}
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
  );
}
