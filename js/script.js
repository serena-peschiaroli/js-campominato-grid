

document.getElementById("btn").addEventListener("click" , gridMaker);

const rowg = document.querySelector(".row");

const difficultyLevel = document.getElementById("difficultyLevel");

// funzione con difficoltà

function gridMaker() {
    let difficulty = difficultyLevel.value;
    let DimensioneGriglia;

    if (difficulty ==="easy") {
        DimensioneGriglia = 100; 
        squareClass = "square-easy";

    }else if (difficulty ==="medium") {
        DimensioneGriglia = 81;
        squareClass = "square-medium";

    }else if (difficulty ==="hard") {
        DimensioneGriglia = 49;
        squareClass = "square-hard";
    }

    rowg.innerHTML = "";

    for (let i = 1; i <= DimensioneGriglia; i++) {
        let square = document.createElement("div");
        square.className = "square " + squareClass;

        console.log(square);

        square.addEventListener("click", function(){
            colorSquare(square, i)
        })

        rowg.appendChild(square);
    }


}


// FUNZIONE:

// GRIGLIA

// function gridMaker() {
//     const rowg = document.querySelector(".row");
//     rowg.innerHTML= "";


//     for (let i = 1; i <= 100; i ++) {
//         let square = document.createElement("div");
//         square.className= `square`;
        
    
//         console.log(square);

//         square.addEventListener("click", function(){
//             colorSquare(square, i);
//         });

    
//         rowg.appendChild(square);
//     }

    
   
    
// }

// COLORE + NUMERO AL CLICK

function colorSquare(square, number) {
    square.textContent= number;
    square.style.backgroundColor = `aquamarine`;
    console.log (`cella cliccata`, square.textcontent);
}

