"use client";
export default function Tooltips() {
  return (
    <div
      className={`bg-slate-200 bg-opacity-20 rounded-xl items-center text-center p-1 mx-4 gap-2 m-1`}
    >
      {/* <h1 className="font-inter"> - make the tooltips :star_struck: 🤩 </h1> */}
      <div className={`text-xs sm:text-lg md:text-xl text-slate-200 p-1`}>
        ❤️‍🔥 click card to examine. decide card ❤️‍🔥
      </div>
      <div className={`text-sm sm:text-base md:text-xl text-slate-200 p-1`}>
        🤩 double click to choose a card. begin. 🤩
      </div>
    </div>
  );
}
