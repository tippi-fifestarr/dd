"use client";
import { gorditas } from "./layout";
import Image from "next/image";
import { useEffect } from "react";

export default function Nav({ chosenCard, selectCard }) {
  const imagePath = `http://image.tmdb.org/t/p/original`;
  ("");
  let image = imagePath + chosenCard.profile_path;
  useEffect(() => {
    console.log("nav useEffect: ", chosenCard);
    console.log("nav console: ", image);
    image = imagePath + chosenCard.profile_path;
  }, [chosenCard]);
  let cardChosen = chosenCard.name != "none" ? true : false;
  console.log(cardChosen);
  return (
    <nav className="border-solid bg-slate-500 rounded text-slate-100">
      <div className="flex space-x-5 justify-between items-center mx-5 mb-2 h-14">
        {/* <Image src= /> */}
        {!cardChosen ? (
          <Image
            src="/favicondd.ico"
            alt="dadeuce favicon"
            width={55}
            height={55}
            className="rounded-full items-center p-1"
          />
        ) : cardChosen ? (
          <div className="overflow-hidden aspect-square h-14 p-1">
            <Image
              src={image}
              alt={`chosen card ${chosenCard.name}`}
              width={500}
              height={500}
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
        ) : (
          <div>
            what the heck is going on here? <br />
          </div>
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
