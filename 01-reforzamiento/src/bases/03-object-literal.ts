interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 20,
  address: {
    postalCode: "14900",
    city: "LCN",
  },
};

console.log({ ironman });

/* const spiderman = structuredClone(ironman);

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.address.city = "NY";

console.log(spiderman, ironman);
 */
