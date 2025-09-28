const useState = (name: string) => {
  return [
    name,
    (par: string) => {
      console.log("hola " + par);
    },
  ] as const;
};

const [name, setName] = useState("Goku");
console.log(name); // Goku
setName("Vegeta");
