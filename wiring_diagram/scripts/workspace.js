const A4_WIDTH = 210;
const A3_WIDTH = 297;
const A3_HEIGHT = 420;
const GRID_CELL_WIDTH = 2;
const SVG_NS = "http://www.w3.org/2000/svg";



let workspace = document.querySelector(".workspace");
let workspaceFormat, workspaceFormatSelect;
let chooseFormatBtn = document.querySelector(".format input");

window.addEventListener("resize", setHeightWorkspace);
chooseFormatBtn.addEventListener("click", chooseFormat);


function setHeightWorkspace () {
    workspace.style.height = (document.documentElement.clientHeight - document.querySelector("header.header").offsetHeight) + "px";
}
setHeightWorkspace();





// function chooseFormat (e) {
//     // SVG workspaceFormat
//     if(workspaceFormat) {
//         console.log(workspace.lastChild.remove());
//     }
    
//     if(e) {
//         e.preventDefault();
//     }
//     workspaceFormatSelect = document.querySelector(".format select");
//     workspaceFormat = document.createElementNS(SVG_NS, "svg");
//     workspaceFormat.classList.add("workspace__format");
//     switch (workspaceFormatSelect.selectedOptions[0].value) {
//         case "A4_portrait":
//             workspaceFormat.setAttribute("height", `${A4_WIDTH}mm`);
//             workspaceFormat.setAttribute("width", `${A3_WIDTH}mm`);
//             break;
        
//         case "A4_landscape":
//             workspaceFormat.setAttribute("height", `${A3_WIDTH}mm`);
//             workspaceFormat.setAttribute("width", `${A4_WIDTH}mm`);
//             break;
        
//         case "A3_portrait":
//             workspaceFormat.setAttribute("height", `${A3_WIDTH}mm`);
//             workspaceFormat.setAttribute("width", `${A3_HEIGHT}mm`);
//             break;

//         case "A3_landscape":
//             workspaceFormat.setAttribute("height", `${A3_HEIGHT}mm`);
//             workspaceFormat.setAttribute("width", `${A3_WIDTH}mm`);
//             break;
    
//     }

//     workspace.appendChild(workspaceFormat);

//     workspaceFormatWidth = workspaceFormat.offsetWidth;
//     workspaceFormatHeight = workspaceFormat.offsetHeight;

    
//     workspaceFormat.addEventListener("mousedown", startMoveDOM);
// }



function chooseFormat (e) {
    // DOM workspaceFormat
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



//move workspace

document.body.querySelector(".main").addEventListener("mousedown", (e)=>e.preventDefault());
workspace.addEventListener("contextmenu", (e)=>e.preventDefault());


workspaceFormat.addEventListener("mousedown", startMoveDOM);

window.addEventListener("mouseup", stopMoveDOM);
window.addEventListener("mouseout", stopMoveDOM);


function startMoveDOM(e) {
    e.preventDefault();
    if (e.which === 2) {        
        //SVG
        // let shiftLeft = e.clientX - e.target.getBoundingClientRect().x;
        // let shiftTop = e.clientY - e.target.getBoundingClientRect().y; 
        // let x = e.target.getBoundingClientRect().x;
        // let y = e.target.getBoundingClientRect().y;
        
        //DOM
        let shiftLeft = e.clientX - e.target.offsetLeft;
        let shiftTop = e.clientY - e.target.offsetTop; 

        // console.log(e.target.getBoundingClientRect());
        // console.log("x: " + e.target.getBoundingClientRect().x, e.clientX, shiftLeft);
        // console.log("y: " + e.target.getBoundingClientRect().y, e.clientY, shiftTop);

        e.target.onmousemove = function(e){
            e.preventDefault();
            e.target.style.cursor = "move";
            
            //SVG
            // e.target.getBoundingClientRect().x = e.clientX - shiftLeft;
            // e.target.getBoundingClientRect().y = e.clientY - shiftTop;
            // console.log(e.clientX, shiftLeft, x,  shiftTop);
            
            //DOM
            e.target.style.left = (e.clientX - shiftLeft) + "px";
            e.target.style.top = (e.clientY - shiftTop) + "px";


        };
    } 
}

function stopMoveDOM(e) {
    e.preventDefault();
    e.target.onmousemove = null;
    e.target.style.cursor = "default";
    target = null;
}




// Scale workspace

let scale = 1;
workspace.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scaleWorkspace(e, workspaceFormat);

});

function scaleWorkspace(e, target) {
    if (e.wheelDelta > 0) {
        scale += 0.05;
    } else {
        scale -= 0.05;
    }
    target.style.transform = `scale(${scale})`;
}