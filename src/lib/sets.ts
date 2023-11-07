const images = import.meta.glob("/public/sets/*/*png");

let sets: Set[] = [];

export type Set = {
  name: string;
  cards: Card[];
};

export type Card = {
  name: string;
  image: string;
};

async function loadSets() {
  if (sets.length !== 0) return;
  sets = [];
  let cards: Card[] = [];
  let currentSet = "";
  for (const path in images) {
    const setName = path.split("/")[3] as string;
    if (currentSet !== setName) {
      if (currentSet !== "") {
        sets.push({ name: currentSet, cards });
        cards = [];
      }
      currentSet = setName;
    }
    const cardName = path.split("/")[4].split(".")[0];
    if (cardName !== "thumbnail")
      cards.push({ name: path.split("/")[4].split(".")[0], image: path });
  }
  sets.push({ name: currentSet, cards });
}

export async function getSets() {
  await loadSets();
  return sets;
}

export function getSet(name: string) {
  return sets.find((set) => set.name === name);
}
