let yourAccessKey = "YbsJp2CFGwKj8clbTSvEAiOLGgByukr90MeraHKhGZo";
let numberOfImages = 15;
let width = 300;
let height = 200;
let fullUrl = `https://api.unsplash.com/photos/random/?client_id=${yourAccessKey}&count=${numberOfImages}&width=${width}&height=${height}`;

let imgTags = document.querySelectorAll("img");

fetch(fullUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    if (Array.isArray(jsonData)) {
      imgTags.forEach(function (tag, index) {
        tag.src = jsonData[index].urls.regular;
        tag.alt = jsonData[index].alt_description || `Photo ${index + 1}`;
      });
    }
  });
