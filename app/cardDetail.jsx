"use client";
import Image from "next/image";
import placeholder from "../public/images/dadeuce.png";

export default function CardDetail({ selectedCard, cardSelected }) {
  // render the card detail
  let imagePath = "http://image.tmdb.org/t/p/original";
  return (
    <div className="h-full">
      {/* display details of selected card, larger image, person name, knownfor, other stats */}
      {!cardSelected ? (
        <div className="flex flex-col sm:flex-row p-0.5 justify-around">
          <div className="relative flex justify-center border-2 border-slate-400 rounded-xl p-1 m-1 gap-1 max-h-40">
            <Image
              src={placeholder}
              // src={chosenCard} // image of selected card
              alt={`image of a DaDeuce Placehold who is known for holding a place`}
              className="object-contain rounded-md w-1/3 sm:w-36"
              height={500}
              width={500}
            />

            <div className="text-sm md:text-xl border-red-500 rounded-md p-1 bg-red-200">
              DaDeuce Placehold is known for **holding a place**, click a card
              to see more details here, double click once you've chosen your
              character!
            </div>
          </div>
        </div>
      ) : cardSelected ? (
        <div className="flex flex-col sm:flex-row p-0.5 justify-around">
          {/* this renders only after a card has been selected */}
          <div className="relative flex justify-around border-2 border-slate-400 rounded-xl p-1 gap-1 m-1 max-h-40">
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
      ) : (
        <div>
          what the heck is going on here? <br />
        </div>
      )}
    </div>
  );
}
