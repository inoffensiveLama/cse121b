const characterElement = document.querySelector("#characters");
var characterList = [];

import { reset } from "./reset.js";

/* async displayCharacters Function */
const displayCharacters = (characters) => {
    characters.forEach(character => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.textContent = character.name;

        const heightElement = document.createElement("p");
        heightElement.textContent = "Heigth: " + character.height;

        const weightElement = document.createElement("p");
        weightElement.textContent = "Weight: " + character.mass;

        const genderElement = document.createElement("p");
        genderElement.textContent = "Gender: " + character.gender;

        const hairElement = document.createElement("p");
        hairElement.textContent = "Hair Color: " + character.hair_color;

        const birthElement = document.createElement("p");
        birthElement.textContent = "Birth Year: " + character.birth_year;
        
        articleElement.appendChild(h3Element);
        articleElement.appendChild(heightElement);
        articleElement.appendChild(weightElement);
        articleElement.appendChild(genderElement);
        articleElement.appendChild(hairElement);
        articleElement.appendChild(birthElement);

        characterElement.appendChild(articleElement);
    });
}

/* async getCharacters Function using fetch()*/
const getCharacters = async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people");
        const data = await response.json();

        if (data.results && Array.isArray(data.results)) {
            characterList = data.results;
            displayCharacters(characterList);
        } else {
            console.error("Invalid data structure received from the API.");
        }
    } catch (error) {
        console.error("Error fetching character data:", error);
    }
}

/* sortBy Function */
function sortBy(characters){
    reset("characters");
    let filter = document.getElementById("sortBy").value;
    switch (filter){
        case "male":
            displayCharacters(characters.filter(character => character.gender === "male"));
            break;
        case "female":
            displayCharacters(characters.filter(character => character.gender === "female"));
            break;
        case "all":
            displayCharacters(characters);
            break;
        default:
            break;
    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(characterList) });

getCharacters();