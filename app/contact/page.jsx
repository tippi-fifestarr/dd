import Tooltips from "../tooltips";
import Cards from "../cardsContact";

export default async function ContactPerson() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center">
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
