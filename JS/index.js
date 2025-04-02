console.log("Hello, world!");

function test () {
    console.log("Test");
}

//Variables//

let gridContainer = document.querySelector(".grid-container");
let gridItem = document.querySelector(".grid-item");

let dropDown = document.querySelector("#number-select")

//Functions//

function getValue () {
    let selectedValue = parseInt(dropDown.value);
    console.log("Selected value is ", selectedValue);
    return selectedValue
}

function captureGrid (selectedValue) {
    console.log(selectedValue)
    let gridSize = selectedValue + 1;
    gridContainer.innerHTML = "";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 100px)`;
    gridContainer.style.gap = "10px";
    gridContainer.style.padding = "20px";
    gridContainer.style.width = "fit-content";
    gridContainer.style.margin = "auto";

    for (let i = 1; i <= gridSize * gridSize; i++) {
        let newItem = document.createElement("div");
        newItem.classList.add("grid-item");
        newItem.textContent = `${i}`;
        gridContainer.appendChild(newItem);
    }


    gridItem.style.backgroundColor = "lightseagreen;"
    console.log("This is the gridSize in captureGrid ", gridSize)
}

//Event Listeners//

dropDown.addEventListener('change', function(){
    let theValue = getValue();
    captureGrid(theValue);
    console.log("Event listener.")
})

