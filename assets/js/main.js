const users = document.querySelector(".users");

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function addClass(el, className) {
  return el.classList.add(className);
}

const ul = document.querySelector("#authors");
const url = "https://randomuser.me/api/?results=10";

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let authors = data.results;
    console.log(authors);
    return authors.map(function (author) {
      let divUser = createNode("div");
      let header = createNode("header");

      let divImage = createNode("div");
      let img = createNode("img");

      // let divRating = createNode("div");

      img.src = author.picture.large;
      header.innerHTML = `${author.name.first}`;
      divUser.innerHTML = `
      <div class="rating-result">
        <span class="active"></span>	
        <span class="active"></span>    
        <span class="active"></span>  
        <span></span>    
        <span></span>
      </div>`;

      append(divUser, header);
      append(divUser, divImage);
      append(divImage, img);
      // append(divUser, divRating);
      append(users, divUser);
      addClass(divUser, "users__item");
      addClass(divImage, "users__img");
    });
  })
  .catch(function (error) {
    console.log(error);
  });
