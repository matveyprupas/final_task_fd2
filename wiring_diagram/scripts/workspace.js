const A4_WIDTH = 210;
const A3_WIDTH = 297;
const A3_HEIGHT = 420;
const GRID_CELL_WIDTH = 2;


let workspace = document.querySelector(".workspace");
let workspaceFormat, workspaceFormatSelect;
let chooseFormatBtn = document.querySelector(".format input");

window.addEventListener("resize", setHeightWorkspace);
chooseFormatBtn.addEventListener("click", chooseFormat);


function setHeightWorkspace () {
    workspace.style.height = (document.documentElement.clientHeight - document.querySelector("header.header").offsetHeight) + "px";
}
setHeightWorkspace();


function chooseFormat (e) {
    if(e) {
        e.preventDefault();
    }
    workspaceFormatSelect = document.querySelector(".format select");
    workspaceFormat = document.querySelector(".workspace__format");
    switch (workspaceFormatSelect.selectedOptions[0].value) {
        case "A4_portrait":
            workspaceFormat.style.height = A4_WIDTH + "mm";
            workspaceFormat.style.width = A3_WIDTH + "mm";
            break;
        
        case "A4_landscape":
            workspaceFormat.style.height = A3_WIDTH + "mm";
            workspaceFormat.style.width = A4_WIDTH + "mm";
            break;
        
        case "A3_portrait":
            workspaceFormat.style.height = A3_WIDTH + "mm";
            workspaceFormat.style.width = A3_HEIGHT + "mm";
            break;

        case "A3_landscape":
            workspaceFormat.style.height = A3_HEIGHT + "mm";
            workspaceFormat.style.width = A3_WIDTH + "mm";
            break;
    
    }

    workspaceFormatWidth = workspaceFormat.offsetWidth;
    workspaceFormatHeight = workspaceFormat.offsetHeight;
}

chooseFormat();





