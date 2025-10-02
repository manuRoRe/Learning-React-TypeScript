import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "D29Frb8SvhayjV8vON6zO7z62yVAVQ19";

const createImageInsideDom = (url: string) => {
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
};

const getImageUrl = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );

  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

getImageUrl()
  .then((url) => createImageInsideDom(url))
  .catch((err) => console.error(err));
