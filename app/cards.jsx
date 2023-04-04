"use client";
import { useState, useEffect } from "react";
import Person from "./person";

export default function Cards({
  chosenCard,
  setChosenCard,
  selectedCard,
  cardSelected,
  setSelectedCard,
  setCardSelected,
}) {
  const [cardChosen, setCardChosen] = useState(false);

  const [people, setPeople] = useState([]);
  const [gotPeople, setGotPeople] = useState(false);

  let imagePath = "http://image.tmdb.org/t/p/original";
  const asyncFetch = async () => {
    const peopleRequestPath = `https://api.themoviedb.org/3/person/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
    // const config = await fetch(
    //   `https://api.themoviedb.org/3/configuration?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    // );

    const data = await fetch(peopleRequestPath);
    const res = await data.json();
    res.results = res.results.sort((a, b) => 0.5 - Math.random());
    setGotPeople(true);
    return res;
  };

  const handleClick = (person) => {
    console.log("single clicked ", person);
    setSelectedCard(person);
    setCardSelected(true);
    console.log("selected card: ", selectedCard);
  };

  const cardChooser = (person) => {
    console.log("cardChooser: ", person);
    setChosenCard(person);
    setCardChosen(true);
  };

  const handleDoubleClick = (person) => {
    console.log("double clicked ", person);
    !cardChosen
      ? cardChooser(person)
      : cardChosen
      ? console.log("card already chosen")
      : null;
  };
  // selectedCard on single click for display in hero details
  // chosenCard on double click for display in the logo, chosenCard happens only once at the beginning
  // flippedCards is an array of cards that have been flipped, and should be hidden, when there is two remaining, update tooltips

  useEffect(() => {
    console.log("people effect: ", people);
    asyncFetch().then((res) => {
      console.log("people: ", people);
      setPeople(res.results);
    });
  }, []);

  useEffect(() => {
    console.log("selected card effect: ", selectedCard);
  }, [selectedCard]);

  useEffect(() => {
    console.log("card selected effect: ", cardSelected);
  }, [cardSelected]);

  useEffect(() => {
    console.log("chosen card effect: ", chosenCard);
  }, [chosenCard]);

  return !gotPeople ? (
    <div className="flex justify-center text-3xl text-slate-200 bg-slate-600 rounded-2xl m-2 p-2">
      Loading DaDeuce Cards... Please wait for the asyncFetch to complete{" "}
      {asyncFetch}
    </div>
  ) : !cardSelected ? (
    <div className="flex flex-col">
      <div className="border-slate-200 border-2 rounded-lg px-1 mx-1 sm:px-2 sm:mx-2 sm:py-1 lg:px-5">
        <div className="grid grid-cols-5">
          {people.map((person) => (
            <div className="m-1 sm:px-1 md:px-3 xl:px-5">
              <Person
                handleClick={handleClick}
                handleDoubleClick={handleDoubleClick}
                className="flex"
                person={person}
                setChosenCard={setChosenCard}
                // name={person.name}
                // known_for={
                //   person.known_for[0].name
                //     ? person.known_for[0].name
                //     : person.known_for[0].title
                // }
                // profile_path={person.profile_path}
                imagePath={imagePath}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="border-slate-200 border-2 rounded-lg px-5 mx-5">
        <div className="grid grid-cols-5">
          {people.map((person) => (
            <div className="m-1">
              <Person
                // onClick={() => {
                //   setChosenCard(person);
                //   console.log("hello", chosenCard);
                // }}
                handleClick={handleClick}
                handleDoubleClick={handleDoubleClick}
                person={person}
                setChosenCard={setChosenCard}
                // name={person.name}
                // known_for={
                //   person.known_for[0].name
                //     ? person.known_for[0].name
                //     : person.known_for[0].title
                // }
                // profile_path={person.profile_path}
                imagePath={imagePath}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
