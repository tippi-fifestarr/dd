import Tooltips from "../tooltips";
import Cards from "../cardsContact";

export default async function ContactPerson() {
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
