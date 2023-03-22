"use client";
import { useState, useEffect } from "react";
import Person from "./person";
import Image from "next/image";

// export default async function Cards() {
export default function Cards() {
  const [chosenCard, setChosenCard] = useState({});
  const [people, setPeople] = useState([]);
  const [gotPeople, setGotPeople] = useState(false);
  const [cardChosen, setCardChosen] = useState(false);

  //   const config = await fetch(
  //     `https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY}`
  //   );

  //   const configo = await config.json();
  //   console.log(configo.images.base_url);
  //   const profSizes = configo.images.profile_sizes;
  //   console.log(profSizes[1]);
  //   const imagePath = `${configo.images.base_url}w185`;
  const imagePath = "http://image.tmdb.org/t/p/original";
  const asyncFetch = async () => {
    // const peopleRequestPath = `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_API_KEY}`;
    const peopleRequestPath = `https://api.themoviedb.org/3/person/popular?api_key=a0ef4ba8ee3fbb16b31e963d0e8099e2`;

    const data = await fetch(peopleRequestPath);
    const res = await data.json();
    res.results = res.results.sort((a, b) => 0.5 - Math.random());
    setGotPeople(true);
    return res;
  };

  useEffect(() => {
    asyncFetch().then((res) => {
      setPeople(res.results);
      console.log(people);
    });
  }, []);

  //   console.log(res);

  //   const [selectedCard, setSelectedCard] = useState("");
  // state for which card was clicked

  // update the hero image to show clicked
  return (
    // map through the res and return 25 names
    !gotPeople ? (
      <div>placeholder {asyncFetch}</div>
    ) : !cardChosen ? (
      <div className="flex flex-col">
        {/* display details of selected card, larger image, person name, knownfor */}
        <div className="relative flex justify-center border-2 border-slate-400 rounded-xl p-2 gap-20 my-1 mx-5">
          <Image
            src={imagePath + people[0].profile_path}
            // src={chosenCard} // image of selected card
            alt={`image of ${people[0].name}`}
            className="object-contain rounded-md"
            height={128}
            width={128}
          />

          <div className="flex relative gap-2 border-red-500 rounded-md p-1 bg-red-200">
            You've clicked on {people[0].name}
          </div>
        </div>

        <div className="border-slate-200 border-2 rounded-lg px-5 mx-5">
          <div className="grid grid-cols-5">
            {people.map((person) => (
              <div className="m-1">
                <Person
                  className="flex gap-2"
                  onClick={() => {
                    setCardChosen(true);
                    setChosenCard(person);
                    console.log("hello", chosenCard);
                  }}
                  name={person.name}
                  known_for={
                    person.known_for[0].name
                      ? person.known_for[0].name
                      : person.known_for[0].title
                  }
                  profile_path={person.profile_path}
                  imagePath={imagePath}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col">
        {/* display details of selected card, larger image, person name, knownfor */}
        <div className="relative flex justify-center border-2 border-slate-400 rounded-xl p-2 gap-20 my-1 mx-5">
          <Image
            src={imagePath + chosenCard.profile_path}
            // src={chosenCard} // image of selected card
            alt={`image of ${chosenCard.name}`}
            className="object-contain rounded-md"
            height={128}
            width={128}
          />

          <div className="flex relative gap-2 border-red-500 rounded-md p-1 bg-red-200">
            You've clicked on {people[0].name}
          </div>
        </div>

        <div className="border-slate-200 border-2 rounded-lg px-5 mx-5">
          <div className="grid grid-cols-5">
            {people.map((person) => (
              <div className="m-1">
                <Person
                  className="flex gap-2"
                  onClick={() => {
                    setChosenCard(person);
                    console.log("hello", chosenCard);
                  }}
                  name={person.name}
                  known_for={
                    person.known_for[0].name
                      ? person.known_for[0].name
                      : person.known_for[0].title
                  }
                  profile_path={person.profile_path}
                  imagePath={imagePath}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
