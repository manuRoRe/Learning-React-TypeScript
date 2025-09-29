const API_KEY = "D29Frb8SvhayjV8vON6zO7z62yVAVQ19";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

myRequest
  .then((response) => response.json())
  .then(({ data }) => {
    const imgUrl = data.images.original.url;
    console.log(imgUrl);

    const img = document.createElement("img");
    img.src = imgUrl;
    document.body.append(img);
  })
  .catch((err) => console.error(err));
