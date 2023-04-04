"use client";
export default function Tipsbox({ chosenCard, tips }) {
  console.log("array?", tips);
  let isChosen = chosenCard.name != "none" ? true : false;
  return (
    <div>
      {!isChosen ? (
        // for each tip in tips, render a tooltip
        <div
          className={`bg-slate-200 bg-opacity-20 rounded-xl items-center text-center p-1 mx-4 gap-2 m-1 flex flex-col-reverse`}
        >
          <div>
            {tips.map((tip) => (
              <div className="text-xs md:text-base lg:text-xl text-slate-200 p-0.5 md:p-1 lg:p-2">
                <div>{tip}</div>
              </div>
            ))}
          </div>
          <div
            className={`text-xs md:text-base lg:text-xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
          >
            🤩 double click to choose a card. begin! 🤩
          </div>
          <div
            className={`text-xs md:text-base lg:text-xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
          >
            😉 single click to view. welcome to dadeuce! 🤩
          </div>
        </div>
      ) : isChosen ? (
        <div
          className={`bg-slate-200 bg-opacity-20 rounded-xl items-center text-center p-1 mx-4 gap-2 m-1`}
        >
          {/* <h1 className="font-inter"> - make the tooltips :star_struck: 🤩 </h1> */}
          <div
            className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
          >
            ❤️‍🔥 click card to examine, ask y/n questions! ❤️‍🔥
          </div>
          <div
            className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
          >
            🤩 You've chosen {chosenCard.name} 🤩
          </div>
          <div className="text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-0.5 md:p-1 lg:p-2">
            "eliminate by double clickin', player!" - dadeuce
          </div>
        </div>
      ) : (
        <div>
          what the heck is going on? <br />
          <br />
        </div>
      )}
    </div>
  );
}
