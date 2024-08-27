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