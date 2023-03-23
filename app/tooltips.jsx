export default async function Tooltips() {
  const data = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_API_KEY}`
  );

  const res = await data.json();
  return (
    <div
      className={`bg-slate-200 bg-opacity-20 rounded-xl items-center text-center p-1 mx-4 gap-2 m-1`}
    >
      {/* <h1 className="font-inter"> - make the tooltips :star_struck: 🤩 </h1> */}
      <div className={`text-sm md:text-xl text-slate-200 p-1`}>
        ❤️‍🔥 {res.results[0].name} is really hot right now for{" "}
        {res.results[0].known_for_department.toLowerCase()} in{" "}
        {res.results[0].known_for[0].title
          ? res.results[0].known_for[0].title
          : res.results[0].known_for[0].name}{" "}
        ❤️‍🔥
      </div>
      <div className={`text-sm md:text-xl p-1`}>
        {res.results[1].name} is almost as popular, for{" "}
        {res.results[1].known_for_department.toLowerCase()} the{" "}
        {res.results[1].known_for[0].title
          ? res.results[1].known_for[0].title
          : res.results[1].known_for[0].name}
      </div>
    </div>
  );
}
