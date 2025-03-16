const container = document.querySelector(".container");
let myColor = "red";

function createGrid(gridSize){
for (i=1; i<=gridSize; i++){
    const myrow = document.createElement("div");
    myrow.classList.add(`row`);
    for (j=1; j<=gridSize; j++){    
        const square = document.createElement("div");
        square.classList.add('square');
        myrow.appendChild(square);
    }
    container.appendChild(myrow);
}
//color in the square function
const myDiv = document.querySelectorAll('.square');
myDiv.forEach((div) => {
    div.addEventListener('mouseenter', function(event) {
    // Code to execute when the mouse enters the div
    this.style.backgroundColor = myColor; // Change background color
  });
});
}

function changeColor(inputColor){
    myColor=inputColor;
}

function resetGrid(){
    //erase the existing grid
    const elementsToRemove = document.querySelectorAll('.row');
    elementsToRemove.forEach(element => {
        element.remove();
    });

    //prompt for the size of the new grid
    let keepGoing = true;
    while (keepGoing == true){
        let newGridSize = parseInt(prompt("What size x by x grid do you want? (max 50)"));
        //check that the user entered a valid number >0 and <=50
        if (!isNaN(newGridSize) && newGridSize>0 && newGridSize <=50){
         createGrid(newGridSize);
         keepGoing = false;
       }
    }
}
createGrid(10);