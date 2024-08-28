const pets=[ 
    {
        name:"Mus",
        levetid: 2,
    },
    {
        name:"Kat",
        levetid: 10,
    },
];

pets.forEach(showPet)

function showPet(obj) {
    const template = document.querySelector("template").content;
    console.log(template)
    
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = obj.name; 
    copy.querySelector("p span").textContent = obj.levetid; 
    
      const parent = document.querySelector(".grid");
     parent.appendChild(copy)

}