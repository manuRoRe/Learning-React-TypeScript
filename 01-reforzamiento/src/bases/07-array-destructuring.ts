const characterNames = ["Lufy", "Zoro", "Nami", "Usopp", "Sanji"];

/* const [p1, p2, p3] = characterNames;

console.log({ p1, p2 });
 */

const [, , p3] = characterNames;
console.log({ p3 });

const returnsArrayFn = () => ["ABC", 123] as const;

const [letters, numbers] = returnsArrayFn();
//console.log({ letters, numbers });
