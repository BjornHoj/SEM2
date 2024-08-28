const data = {
    header: "Bussen er kørt",
    description: "vi når den næste",

};


const template = document.querySelector("template").content;
console.log(template)

const copy = template.cloneNode(true);
copy.querySelector("h2").textContent = data.header; 
copy.querySelector("P").textContent = data.description; 

  const parent = document.querySelector(".grid");
 parent.appendChild(copy)

