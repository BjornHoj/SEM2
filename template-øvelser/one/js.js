/*// Trin 1: vælg <template> content. 
const templateElement = document.querySelector("#myTemplate").Content;

// Trin 2: Lav en clon
const myClone = templateElement.cloneNode(true);

// Trin 3: Ændre content
myClone.querySelector("h1")textContent = "hej verden";

// Trin 4; Vælg den nye "forældre"
const parentElement = document.querySelector("body");

// Trin 5 tilføj klonen til DOM
parentElement.appendChild(myClone);*/

// Trin 1: vælg <template> content. 
const template = document.querySelector("template").content;
console.log(template)

const copy = template.cloneNode(true);

  const parent = document.querySelector(".grid");
 parent.appendChild(copy)


