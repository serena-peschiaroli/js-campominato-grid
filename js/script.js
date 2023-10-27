

document.getElementById("btn").addEventListener("click" , gridMaker);




// FUNZIONE:

// GRIGLIA

function gridMaker() {
    const rowg = document.querySelector(".row");
    let rowgrid = "";

    for (let i = 1; i <= 100; i ++) {
        let result = i;
        console.log(i);
        rowgrid += `<div class="square">${i}</div>`;
    }

    rowg.innerHTML= rowgrid;
    
}

