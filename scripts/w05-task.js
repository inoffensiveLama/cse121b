/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageURL;
        imgElement.alt = temple.location;
        
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templeElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
function reset(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}


/* sortBy Function */
function sortBy(temples){
    reset("temples");
    let filter = document.getElementById("sortBy").value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            const olderThan1950 = new Date(1950, 0, 1);
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < olderThan1950));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            break;
    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });