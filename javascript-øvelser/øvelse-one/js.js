const ølElement = document.querySelector("#ølElement");
const snapsElement = document.querySelector("#snapsElement");
const colaElement = document.querySelector("#colaElement");
const faxeElement = document.querySelector("#faxeElement");

ølElement.addEventListener("click", checkDrink);
snapsElement.addEventListener("click", checkDrink);
colaElement.addEventListener("click", checkDrink);
faxeElement.addEventListener("click", checkDrink);


function checkDrink() {
    if (this.alt === "øl" || this.alt === "snaps") {
        console.log("indeholder alkohol");
    } else if (this.alt === "cola" || this.alt ==="faxe") {
        console.log("alkoholfri");
    }
}

/* Forkortet kode af ChatGPT

const drinks = [
    { id: "#ølElement", type: "øl" },
    { id: "#snapsElement", type: "snaps" },
    { id: "#colaElement", type: "cola" },
    { id: "#faxeElement", type: "faxe" }
];

drinks.forEach(drink => {
    document.querySelector(drink.id).addEventListener("click", function() {
        checkDrink(drink.type);
    });
});

function checkDrink(type) {
    if (type === "øl" || type === "snaps") {
        console.log("indeholder alkohol");
    } else if (type === "cola" || type === "faxe") {
        console.log("alkoholfri");
    }
}*/
