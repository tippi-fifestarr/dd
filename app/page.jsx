// "use client";

import Tooltips from "./tooltips";
import Cards from "./cards";

export default function Home() {
  return (
    <main>
      <Tooltips
      // tips={[
      //   "take turns asking yes/no questions to dadeuce!",
      //   "eliminate by double clickin', player!",
      //   "give me a tip, send to wingbird.eth",
      // ]}
      />
      <Cards className="items-center" />
    </main>
  );
}
