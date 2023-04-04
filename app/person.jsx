"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Person({
  person,
  imagePath,
  handleClick,
  handleDoubleClick,
}) {
  const { name, known_for, profile_path } = person;
  const image = imagePath + profile_path;

  const [isCardClicked, setCardClicked] = useState(false);
  const [isDoubleClicked, setDoubleClicked] = useState(false);

  const cardClickHandler = () => {
    setCardClicked(!isCardClicked);
    handleClick(person);
  };

  const doubleClickHandler = (e) => {
    setDoubleClicked(!isDoubleClicked);
    handleDoubleClick(person);
    console.log("double clicked!: ", name, known_for);
  };
  return (
    <div className="bg-slate-700 bg-opacity-30 rounded-md justify-around sm:mx-1 lg:mx-3 md:p-1 xl:p-3">
      {/* <h1>{name}</h1> */}
      {/* <p>oh, from {known_for}, right?</p> */}
      {/* <Link className="relative h-16" href={`/about`}> */}
      <div className="relative flex align-middle justify-center overflow-hidden aspect-square">
        <Image
          src={image}
          alt={`image of ${name}`}
          width={500}
          height={500}
          className={`w-full h-full object-cover my-0.5 rounded-3xl focus:outline-none focus:ring focus:ring-violet-300 hover:border-solid active:border-red-700  hover:border-2 duration-500 ${
            isDoubleClicked ? "blur-sm" : ""
          }`}
          // className="absolute h-full w-full object-cover rounded-md"
          onClick={(e) => cardClickHandler()}
          onDoubleClick={(e) => doubleClickHandler(e)}
        />
      </div>
      {/* </Link> */}
    </div>
  );
}
