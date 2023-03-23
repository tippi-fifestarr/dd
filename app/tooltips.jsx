"use client";
export default function Tooltips() {
  return (
    <div
      className={`bg-slate-200 bg-opacity-20 rounded-xl items-center text-center p-1 mx-4 gap-2 m-1`}
    >
      {/* <h1 className="font-inter"> - make the tooltips :star_struck: 🤩 </h1> */}
      <div
        className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-1`}
      >
        ❤️‍🔥 click card to examine, then choose. ❤️‍🔥
      </div>
      <div
        className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-1`}
      >
        🤩 double click to choose a card. begin! 🤩
      </div>
    </div>
  );
}
