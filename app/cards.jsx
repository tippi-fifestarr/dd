import Person from "./person";

export default async function Cards() {
  const config = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY}`
  );

  const configo = await config.json();
  console.log(configo.images.profile_sizes);
  const profSizes = configo.images.profile_sizes;
  console.log(profSizes[1]);
  const imagePath = `${configo.images.base_url}w185`;
  const data = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  const res = await data.json();

  //   console.log(res);
  return (
    // map through the res and return 25 names
    <div className="grid grid-cols-5">
      {res.results.map((person) => (
        <div className="m-1">
          <Person
            className="flex gap-2"
            name={person.name}
            known_for={
              person.known_for[0].name
                ? person.known_for[0].name
                : person.known_for[0].title
            }
            profile_path={person.profile_path}
            imagePath={imagePath}
          />
        </div>
      ))}
    </div>
  );
}
