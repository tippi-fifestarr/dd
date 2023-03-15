export default async function Tooltips() {
  const data = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_API_KEY}`
  );

  const res = await data.json();
  return (
    <div
      className={`bg-slate-200 bg-opacity-20 rounded-full items-center text-center p-1 gap-2`}
    >
      {/* <h1 className="font-inter"> - make the tooltips :star_struck: 🤩 </h1> */}
      <div className={`text-xl text-slate-200`}>
        ❤️‍🔥 {res.results[0].name} is really hot right now for{" "}
        {res.results[0].known_for_department.toLowerCase()} in{" "}
        {res.results[0].known_for[0].title
          ? res.results[0].known_for[0].title
          : res.results[0].known_for[0].name}{" "}
        ❤️‍🔥
      </div>
      <div className={`text-xl`}>
        {res.results[1].name} is almost as popular, for{" "}
        {res.results[1].known_for_department.toLowerCase()} the{" "}
        {res.results[1].known_for[0].title
          ? res.results[1].known_for[0].title
          : res.results[1].known_for[0].name}
      </div>
    </div>
  );
}
