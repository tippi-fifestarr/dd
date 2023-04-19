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
  totalClicks,
  setTotalClicks,
  isNewLevel,
  setNewLevel,
  cardsRemaining,
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
    setSelectedCard(person);
    setCardSelected(true);
  };

  const cardChooser = (person) => {
    setChosenCard(person);
    setCardChosen(true);
    console.log("player chose card: ", person.name);
  };

  const handleDoubleClick = (person) => {
    console.log("is this a new level? ", isNewLevel);
    if (isNewLevel) {
      if (!cardChosen) {
        cardChooser(person);
      } else {
        console.log(
          "card already chosen, so this causes the secondary effect of doubleclicking, namely flipping the card"
        );
      }
      if (cardsRemaining === 1) {
        handleLevelComplete(); // this assumes handleLevelComplete is a function that is defined somewhere in the Page component
      } else {
        setNewLevel(false); // this is the first click, so set isNewLevel to false
      }
    }
  };
  // selectedCard on single click for display in hero details
  // chosenCard on double click for display in the logo, chosenCard happens only once at the beginning
  // flippedCards is an array of cards that have been flipped, and should be hidden, when there is two remaining, update tooltips

  useEffect(() => {
    asyncFetch().then((res) => {
      setPeople(res.results);
    });
  }, []);

  useEffect(() => {
    setTotalClicks(totalClicks + 1);
    console.log("total clicks: ", totalClicks);
  }, [selectedCard]);

  useEffect(() => {}, [cardSelected]);

  useEffect(() => {}, [chosenCard]);

  return !gotPeople ? (
    <div className="flex justify-center text-3xl text-slate-200 bg-slate-600 rounded-2xl m-2 p-2">
      Loading DaDeuce Cards... Please wait for the asyncFetch to complete
    </div>
  ) : !cardSelected ? (
    <div className="flex flex-col">
      <div className="border-slate-200 border-2 rounded-lg px-1 mx-1 sm:px-2 sm:mx-2 sm:py-1 lg:px-5">
        <div className="grid grid-cols-5">
          {people.map((person) => (
            <div key={person.id} className="m-1 sm:px-1 md:px-3 xl:px-5">
              <Person
                handleClick={handleClick}
                handleDoubleClick={handleDoubleClick}
                isNewLevel={isNewLevel}
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
            <div key={person.id} className="m-1">
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
