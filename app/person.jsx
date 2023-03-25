"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Person({
  // name,
  // known_for,
  // profile_path,
  person,
  imagePath,
  handleClick,
  handleDoubleClick,
}) {
  const { name, known_for, profile_path } = person;
  // console.log(name);
  const image = imagePath + profile_path;
  const poster = imagePath + known_for[0].poster_path;
  // console.log(poster);

  //   profile_path = profile_path.slice(1);
  // use state
  const [cardClicked, setCardClicked] = useState(false);
  const [dblClicked, setDblClicked] = useState(false);

  const cardClickHandler = () => {
    // handleClick(person);
    setCardClicked(!cardClicked);
    // console.log("cardClicked: ", name, known_for, " and ", e.target);
    // setChosenCard({ name, known_for, profile_path, imagePath });
    handleClick(person);
  };

  const doubleClickHandler = (e) => {
    setDblClicked(!dblClicked);
    // console.log(person);
    // handleClick(person);
    handleDoubleClick(person);
    console.log("double clicked!: ", name, known_for);
  };
  return (
    <div className="bg-slate-700 bg-opacity-30 rounded-md justify-around">
      {/* <h1>{name}</h1> */}
      {/* <p>oh, from {known_for}, right?</p> */}
      {/* <Link className="relative h-16" href={`/about`}> */}
      <div className="relative flex align-middle justify-center">
        <Image
          src={image}
          alt={`image of ${name}`}
          width={1000}
          height={1000}
          className={`flex w-full sm:w-20 lg:w-24 md:p-1 xl:p-2 xl:w-28 my-0.5 object-center rounded-3xl focus:outline-none focus:ring focus:ring-violet-300 hover:border-solid active:border-red-700  hover:border-2 duration-500 ${
            dblClicked ? "blur-sm" : ""
          }`}
          onClick={(e) => cardClickHandler()}
          onDoubleClick={(e) => doubleClickHandler(e)}
        />
      </div>
      {/* </Link> */}
    </div>
  );
}
