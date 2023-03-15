"use client";

import Link from "next/link";
import Image from "next/image";

export default function Person({ name, known_for, profile_path, imagePath }) {
  //   profile_path = profile_path.slice(1);
  const image = imagePath + profile_path;
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
          className="rounded-full items-center"
          onClick={() => console.log(name)}
        />
      </div>
      {/* </Link> */}
    </div>
  );
}
