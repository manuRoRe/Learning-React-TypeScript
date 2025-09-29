const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! Yo quiero mi dinero
    //resolve(100);
    reject("No tengo mi dinero");
  }, 2000); //dos segundos
});

myPromise
  .then((myMoneyIsBack) => {
    console.log("Tengo mi dinero", myMoneyIsBack);
  })
  .catch((err) => console.warn(err))
  .finally(() => console.log("Sigo con mi vida"));
