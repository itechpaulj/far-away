import { AddItem } from "../App";

type IsStats = {
  addItems: AddItem[];
};

function Statistics({ addItems }: IsStats) {
  if (!addItems.length)
    return (
      <p className="stats">
        {" "}
        <em>Start add item(s) packaging list here 🚀</em>{" "}
      </p>
    );

  const numLength = addItems.length;
  const numPacked = addItems.filter((item) => item.packed === true).length;
  const numPercent = (numPacked / numLength) * 100 || 0;

  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? `You got the everything ✈️`
          : `💼 You have ${numLength} items on your list, and you already packed
       ${numPacked} (${numPercent}%)`}
      </em>
    </footer>
  );
}

export default Statistics;
