import Image from "next/image";
import Link from "next/link";

export default async function ContactPerson({ params }) {
  const { person } = params;
  const imagePath = "http://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/person/${person}?api_key=${process.env.TMDB_API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className="p-2">
      <h1 className="text-2xl text-slate-200 m-2 p-2 bg-slate-600 rounded-md">
        {res.name}... AKA {res.also_known_as[0]}
        {res.also_known_as.map((aka) => {
          return " aka " + aka;
        })}
      </h1>

      <div className="flex flex-row p-2 bg-black bg-opacity-10 rounded-lg">
        <Image
          src={imagePath + res.profile_path}
          alt={`image of ${res.name}`}
          className="object-contain rounded-md p-1"
          height={256}
          width={256}
        />
        <div className="flex flex-col">
          <div className="text-xl text-slate-300 my-2 p-2">{res.biography}</div>
          <div className="text-xl flex-col text-slate-200 my-2 p-2">
            birthed: {res.birthday} in the land of {res.place_of_birth}
          </div>
        </div>
      </div>
      <Link
        href="/contact"
        className="bg-green-500 inline-block my-2 py-2 px-4 rounded-lg"
      >
        Return
      </Link>
    </div>
  );
}
