"use client";
import { useState, useEffect } from "react";
import Person from "./person";
import Image from "next/image";
import Tooltips from "./tooltips";

// export default async function Cards() {
export default function Cards({ chosenCard, setChosenCard }) {
  // this is what's breaking it, putting these into layout
  // const [chosenCard, setChosenCard] = useState({});
  const [cardChosen, setCardChosen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [cardSelected, setCardSelected] = useState(false);
  const [people, setPeople] = useState([]);
  const [gotPeople, setGotPeople] = useState(false);

  // let person = {};
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

  const handleClick = (person) => {
    console.log("single clicked ", person);
    // setChosenCard(person);
    // setCardChosen(true);
    setSelectedCard(person);
    setCardSelected(true);
    console.log("selected card: ", selectedCard);
    // console.log(cardChosen);
    // console.log("chosen card: ", chosenCard);
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
    console.log("chosen card effect: ", chosenCard);
  }, [chosenCard]);

  //   console.log(res);

  //   const [selectedCard, setSelectedCard] = useState("");
  // state for which card was clicked

  // update the hero image to show clicked
  return (
    // cards element is the parent of the card detail and the card grid
    // cards begins with a div

    !gotPeople ? (
      <div>placeholder {asyncFetch}</div>
    ) : !cardSelected ? (
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row p-0.5 justify-around">
          <div className="md:w-1/3 border-2 border-slate-300 rounded-xl p-1 m-1">
            {" "}
            <div
              className="float-right text-slate-200 px-1 hover:text-slate-400 cursor-pointer"
              onClick={() => {
                alert("tooltips in progress ");
              }}
            >
              (d)
            </div>
            <Tooltips
              cardChosen={cardChosen}
              tips={[
                "take turns asking yes/no questions to dadeuce!",
                "eliminate by double clickin', player!",
                "give me a tip, send to wingbird.eth",
              ]}
            />
          </div>

          <div className="relative flex justify-center border-2 border-slate-400 rounded-xl p-2 gap-1 p-1 my-1 mx-1">
            <Image
              src={imagePath + people[0].profile_path}
              // src={chosenCard} // image of selected card
              alt={`image of ${people[0].name} who is known for ${people[0].known_for[0].name}`}
              className="object-contain rounded-md w-1/3 sm:w-36"
              height={500}
              width={500}
            />

            <div className="text-sm md:text-xl border-red-500 rounded-md p-1 bg-red-200">
              You've clicked on <b> {people[0].name} </b> who is known for{" "}
              <b>{people[0].known_for[0].name} </b>
            </div>
          </div>
        </div>
        {/* display details of selected card, larger image, person name, knownfor, other stats */}

        <div className="border-slate-200 border-2 rounded-lg px-1 mx-1 sm:px-2 sm:mx-2 sm:py-1 lg:px-5">
          <div className="grid grid-cols-5">
            {people.map((person) => (
              <div className="m-1">
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
        <div className="flex flex-col sm:flex-row p-0.5 justify-around">
          <Tooltips />
          {/* this renders only after a card has been chosen */}
          <div className="relative flex justify-around border-2 border-slate-400 rounded-xl p-1 gap-1 my-1 mx-2">
            <Image
              src={imagePath + selectedCard.profile_path}
              // src={chosenCard} // image of selected card
              alt={`image of ${selectedCard.name} who is known for ${selectedCard.known_for[0].name}`}
              className="object-contain rounded-md w-1/3 sm:w-36 "
              height={420}
              width={420}
            />
            <div className="text-sm md:text-xl border-red-500 rounded-md p-1 bg-red-200">
              You've clicked on <b> {selectedCard.name}, </b>{" "}
              <b>
                {" "}
                {selectedCard.known_for[0].name
                  ? selectedCard.known_for[0].name
                  : selectedCard.known_for[0].title}
              </b>{" "}
              is something they are known for!
              <div className="text-base">
                {selectedCard.gender == "1" ? "Her" : "His"} popularity is{" "}
                {selectedCard.popularity}
              </div>
            </div>
          </div>
        </div>

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
    )
  );
}
