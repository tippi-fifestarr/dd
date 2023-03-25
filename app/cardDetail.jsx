"use client";

export default function CardDetail(selectedCard) {
  // render the card detail
  return (
    <div className="flex flex-col">
      <div className="relative flex justify-center border-2 border-slate-400 rounded-xl p-2 gap-20 my-1 mx-5">
        <Image
          src={selectedCard.url}
          alt={`image of ${selectedCard.name}`}
          className="object-contain rounded-md w-full lg:w-24"
          height={1000}
          width={1000}
        />
        {/* card metadata */}
        <div className="flex relative gap-2 border-red-500 rounded-md p-1 bg-red-200">
          You've clicked on {selectedCard.name}
        </div>
      </div>
    </div>
  );
}
