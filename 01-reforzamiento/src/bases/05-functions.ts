function greet(name: string): string {
  return "Hola " + name;
}

/* const greet2 = (name: string): string => {
  return "gola " + name;
}; */

const greet2 = (name: any) => "Hola " + name;

const hello = greet("Manuel");
const hello2 = greet2("Ant");

console.log(hello, hello2);

const getUser = () => {
  return {
    uuid: "ABD-123",
    username: "Manu61",
  };
};

const getUser2 = () => ({ uuid: "ABD-123", username: "Manu61" });

const usuario = getUser();
console.log(usuario);

const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

myNumbers.forEach((value) => {
  console.log("valor: " + value);
});
