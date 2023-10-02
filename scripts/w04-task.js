/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jan Zander",
    photo: "images/profilepicture.png",
    favouriteFood: ["Burger", "Fries", "Pizza"],
    hobbies: ["3D Printing", "Pokemon", "Electronics"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */ 
myProfile.placesLived.push(
    {
        place: "Halle, Germany",
        length: "5 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Stuttgart, Germany",
        length: "14 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Scotland and Ireland",
        length: "2 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Stuttgart, Germany",
        length: "3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Hannover, Germany",
        length: "5 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Manila, Philippines",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("picture img").setAttribute("src", myProfile.photo);
document.querySelector("picture img").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favouriteFood.forEach(food => {
    let list = document.createElement("li");
    list.textContent = food;
    document.querySelector("#favorite-foods").appendChild(list);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let list = document.createElement("li");
    list.textContent = hobby;
    document.querySelector("#hobbies").appendChild(list);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    dt.textContent = placeLived.place;

    let dd = document.createElement("dd");
    dd.textContent = placeLived.length;

    let placesLivedList = document.querySelector("#places-lived");
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});

