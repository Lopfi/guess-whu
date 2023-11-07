const images = {
  ...import.meta.glob("/src/assets/sets/*/*.png"),
  ...import.meta.glob("/src/assets/sets/*/*.jpg"),
  ...import.meta.glob("/src/assets/sets/*/*.jpeg"),
};

let sets: Set[] = [];

export type Set = {
  name: string;
  cards: Card[];
  thumbnail?: string;
};

export type Card = {
  name: string;
  image: string;
};

async function loadSets() {
  if (sets.length !== 0) return;
  sets = [];
  let cards: Card[] = [];
  let thumbnail: string | undefined;
  let currentSet = "";
  for (const path in images) {
    const setName = path.split("/")[4] as string;
    if (currentSet !== setName) {
      if (currentSet !== "") {
        sets.push({ name: currentSet, cards, thumbnail });
        cards = [];
      }
      currentSet = setName;
    }
    const cardName = path.split("/")[5].split(".")[0];
    if (cardName !== "thumbnail") cards.push({ name: cardName, image: path });
    else {
      thumbnail = path;
    }
  }
  sets.push({ name: currentSet, cards, thumbnail });
}

export async function getSets() {
  await loadSets();
  return sets;
}

export async function getSet(name: string) {
  await loadSets();
  return sets.find((set) => set.name === name);
}
