const A4_WIDTH = 210;
const A4_HEIGHT = 297;
const A3_WIDTH = 297;
const A3_HEIGHT = 420;
const GRID_CELL_WIDTH = 2;


let workspaceFormat; 
let chooseFormatBtn = document.querySelector(".format input");
console.log(chooseFormatBtn);
chooseFormatBtn.addEventListener("click", chooseFormat);

function chooseFormat (e) {
    e.preventDefault();
    workspaceFormat = document.querySelector(".format select"); 
    console.log(workspaceFormat.selectedOptions[0].value);
}


