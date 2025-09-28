const person = {
  name: "tony",
  age: 45,
  key: "ironman",
};

//const { key, name, age } = person;

//console.log({ name, age, key });
/*const name=person.name;
const age=person.age;
const key=person.key;*/

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ key, name, age, rank = "Sin rank" }: Hero) => {
  return {
    keyName: key,
    user: {
      //no hace falta poner el nombre
      name,
      age: age,
    },
    rank: rank,
  };
};

const {
  keyName,
  rank,
  user: { name, age },
} = useContext(person);
console.log(keyName, rank, name, age);
