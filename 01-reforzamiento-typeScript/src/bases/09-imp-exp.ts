import { heroes as misHeroes, Owner, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = misHeroes.find((hero) => {
    return hero.id === id;
  });

  /* if (!hero) {
    throw new Error(`Hero with id ${id} not found`);
  } */
  return hero;
};

export const getHeroByOwner = (owner: Owner): Hero[] => {
  /* const heroes: Hero[] = [];
  misHeroes.forEach((h) => {
    if (h.owner === owner) {
      heroes.push(h);
    }
  });
  return heroes; */
  const herosByOwner: Hero[] = misHeroes.filter((hero) => hero.owner === owner);
  return herosByOwner;
};

console.log(getHeroById(3));
