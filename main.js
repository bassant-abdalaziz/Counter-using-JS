let count = document.getElementById("count");
let counter = 0;


document.getElementById("increase").addEventListener("click", () => {
    counter += 1;
    count.innerHTML = counter;
    applyColor();
})


document.getElementById("reset").addEventListener("click", () => {
    counter = 0;
    count.innerHTML = counter;
    applyColor();
})


document.getElementById("decrease").addEventListener("click", () => {
    counter -= 1;
    count.innerHTML = counter;
    applyColor();
})


function applyColor() {
    if (count.innerHTML > 0)
        count.style.color = "green";
    else if (count.innerHTML < 0)
        count.style.color = "red";
    else
        count.style.color = "black"
}
