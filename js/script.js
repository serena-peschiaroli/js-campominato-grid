

document.getElementById("btn").addEventListener("click" , gridMaker);

const rowg = document.querySelector(".row");





// FUNZIONE:

// GRIGLIA

function gridMaker() {
    const rowg = document.querySelector(".row");
    rowg.innerHTML= "";

    for (let i = 1; i <= 100; i ++) {
        let square = document.createElement("div");
        square.className= `square`;
        
    
        console.log(square);

        square.addEventListener("click", function(){
            colorSquare(square, i);
        });

    
        rowg.appendChild(square);
    }

    
   
    
}


function colorSquare(square, number) {
    square.textContent= number;
    square.style.backgroundColor = `blue`;
    console.log (`cella cliccata`, square.textcontent);
}

