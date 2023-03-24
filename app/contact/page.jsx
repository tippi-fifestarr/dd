import Tooltips from "../tooltips";
import Cards from "../cardsContact";

export default async function ContactPerson({ params }) {
  console.log("params: ", params);
  const person = params.person;
  const imagePath = "http://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/person/${person}?api_key=${process.env.TMDB_API_KEY}`
  );
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center">
      <h1 className="text-slate-200 items-center md:justify-center"></h1>
      <Cards className="items-center" />
      <Tooltips
        tips={[
          "Click a person to see their contact info",
          "no celebrities were harmed in the making of this game",
        ]}
      />
    </div>
  );
}
