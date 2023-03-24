"use client";
export default function Tooltips(array) {
  // console.log("params: ", array);
  const tips = array.tips;
  console.log("array?", tips);
  return (
    <div>
      {tips ? (
        // for each tip in tips, render a tooltip
        <div
          className={`bg-slate-200 bg-opacity-20 rounded-xl items-center text-center p-1 mx-4 gap-2 m-1`}
        >
          <div>
            {tips.forEach((tip) => {
              <div
                className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
              >
                <div>tip {tip + console.log(tip)}</div>
              </div>;
            })}
          </div>
          <div
            className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
          >
            🤩 double click to choose a card. begin! 🤩
          </div>
        </div>
      ) : (
        // <div>
        //   {tips.map((tip) => {
        //     <div
        //       className={`bg-slate-200 bg-opacity-20 rounded-xl items-center text-center p-1 mx-4 gap-2 m-1`}
        //     >
        //       <div
        //         className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
        //       >
        //         {tip}
        //       </div>
        //     </div>;
        //   })}
        // </div>
        <div
          className={`bg-slate-200 bg-opacity-20 rounded-xl items-center text-center p-1 mx-4 gap-2 m-1`}
        >
          {/* <h1 className="font-inter"> - make the tooltips :star_struck: 🤩 </h1> */}
          <div
            className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
          >
            ❤️‍🔥 click card to examine, then choose. ❤️‍🔥
          </div>
          <div
            className={`text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 p-0.5 md:p-1 lg:p-2`}
          >
            🤩 double click to choose a card. begin! 🤩
          </div>
        </div>
      )}
    </div>
  );
}
