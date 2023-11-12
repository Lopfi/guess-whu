const images = {
  ...import.meta.glob("/public/sets/*/*.png"),
  ...import.meta.glob("/public/sets/*/*.jpg"),
  ...import.meta.glob("/public/sets/*/*.jpeg"),
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
  const regex = /\/public\/sets\/(.*)\/(.*).(png|jpg|jpeg)/;
  for (const path in images) {
    const actualPath = path.replace("/public", "/guess-whu");
    const match = path.match(regex);
    if (match) {
      const setName = match[1];
      const cardName = match[2];
      const set = sets.find((set) => set.name === setName);
      if (set) {
        if (cardName !== "thumbnail")
          set.cards.push({
            name: cardName,
            image: actualPath,
          });
        else {
          set.thumbnail = actualPath;
        }
      } else {
        if (cardName !== "thumbnail")
          sets.push({
            name: setName,
            cards: [
              {
                name: cardName,
                image: actualPath,
              },
            ],
          });
        else {
          sets.push({
            name: setName,
            cards: [],
            thumbnail: actualPath,
          });
        }
      }
    }
  }
}

export async function getSets() {
  await loadSets();
  return sets;
}

export async function getSet(name: string) {
  await loadSets();
  return sets.find((set) => set.name === name);
}
