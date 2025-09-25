const ironman = {
  firstName: "Tony",
  lastName: "Stark",
  age: 20,
  address: {
    postalCode: "14900",
    city: "LCN",
  },
};

const spiderman = structuredClone(ironman);

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.address.city = "NY";

console.log(spiderman, ironman);
