const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doThis(data);
    }
}
/*
async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      doStuffList(data);
    }
  }
*/

function compare(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    if(a.name == b.name){
        return 0;
    }
}

function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                <img src = "${results.sprites.front_default}", alt = "front_default">`
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.sort(compare);
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        pokeListElement.innerHTML += html;
    });
    
}

getPokemon(url, doStuff);
console.log("second: ", results);

getPokemon(urlList, doStuffList);