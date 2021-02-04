const btn = document.querySelector("button");

btn.addEventListener("click", getFetch);

// function createRecipe(recipe) {
//   const ingredientList =
//     recipe.ingredientLines.reduce((acc, item) => {
//       return acc + `<li>${item}</li>`;
//     }, "<ul>") + "</ul>";
//   return `
// 			<div class="card">
// 				<h2>${recipe.label}</h2>
//         <img src="${recipe.image}" alt="${recipe.label}">
//         <h3 class="ingredients">${ingredientList}</h3>
//         <h3 class="recipeSrc">Recipe retrieved from "${recipe.source}"</h3>
//         <h4>See full recipe <a href=${recipe.url}>here</a></h4>
//       </div>
//       `;
// }

function getMeme(meme) {
  const searchName = meme.name.split(" ").join("%20");
  return `
    <div class="card">
      <h2>${meme.name}</h2>
      <img src="${meme.url}" alt="${meme.name}">

      <h4> Find out more about this meme <a href=https://knowyourmeme.com/search?q=${searchName}> here </a>
      </div>
  `;
}

function getFetch() {
  const url = `https://api.imgflip.com/get_memes`;
  const random = Math.floor(Math.random() * 100) + 1;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.data.memes[random]);
      document.querySelector(".searchResults").innerHTML = "";
      document
        .querySelector(".searchResults")
        .insertAdjacentHTML("beforeend", getMeme(data.data.memes[random]));
      document.querySelector("button").innerText = "Anotha one!";
      // document.querySelector(".recipeBody").innerHTML = "";
      // //create recipe html for each entry
      // for (let i = 0; i < data.hits.length; i++) {
      //   document
      //     .querySelector(".recipeBody")
      //     .insertAdjacentHTML("afterbegin", createRecipe(data.hits[i].recipe));
      // }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
