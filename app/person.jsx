"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Person({ name, known_for, profile_path, imagePath }) {
  //   profile_path = profile_path.slice(1);
  const image = imagePath + profile_path;
  // use state
  const [cardClicked, setCardClicked] = useState(false);
  const [dblClicked, setDblClicked] = useState(false);

  const cardClickHandler = (e) => {
    setCardClicked(!cardClicked);
    console.log("cardClicked: ", name, known_for, " and ", e.target);
  };

  const doubleClickHandler = (e) => {
    setDblClicked(!dblClicked);
    console.log("double clicked!: ", name, known_for);
  };
  return (
    <div className="h-20 w-20">
      {/* <h1>{name}</h1> */}
      {/* <p>oh, from {known_for}, right?</p> */}
      {/* <Link className="relative h-16" href={`/about`}> */}
      <div className="relative h-16">
        <Image
          src={image}
          alt={`image of ${name}`}
          width={55}
          height={55}
          className={`rounded-full items-center focus:outline-none focus:ring focus:ring-violet-300 hover:border-solid active:border-red-700  hover:border-2 duration-500 ${
            dblClicked ? "blur-sm" : ""
          } ${cardClicked ? "border-3 rounded-2xl" : ""}`}
          onClick={(e) => cardClickHandler(e)}
          onDoubleClick={(e) => doubleClickHandler(e)}
        />
      </div>
      {/* </Link> */}
    </div>
  );
}
