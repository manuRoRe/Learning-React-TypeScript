import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "D29Frb8SvhayjV8vON6zO7z62yVAVQ19";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDom = (url: string) => {
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    /* const imgUrl = data.data.images.original.url;
    console.log(imgUrl);*/

    const imgUrl = data.images.original.url;
    console.log(imgUrl);

    createImageInsideDom(imgUrl);
  })
  .catch((err) => console.error(err));
