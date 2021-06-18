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
        //DOM
        let shiftLeft = e.clientX - e.target.offsetLeft;
        let shiftTop = e.clientY - e.target.offsetTop; 

        e.target.onmousemove = function(e){
            e.preventDefault();
            e.target.style.cursor = "move";
            
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
        target.childNodes.forEach((el) => {
            let width = Math.abs(el.getBBox().width*1.05);
            let height = Math.abs(el.getBBox().height*1.05);
            let left = Math.abs(parseFloat(el.style.left)*1.05);
            let top = Math.abs(parseFloat(el.style.top)*1.05);

            el.querySelectorAll("circle").forEach((cir) => {
                let circleRadius = parseFloat(cir.getAttribute("r"))*1.05;
                let circleLeft = parseFloat(cir.getAttribute("cx"))*1.05;
                let circleTop = parseFloat(cir.getAttribute("cy"))*1.05;
                // console.log(circleRadius, circleLeft, scircleTop);

                cir.setAttribute("r", `${circleRadius}`);
                cir.setAttribute("cx", `${circleLeft}`);
                cir.setAttribute("cy", `${circleTop}`);
            });

            el.setAttribute("width", `${width}`);
            el.setAttribute("height", `${height}`);

            el.firstChild.setAttribute("width", `${width}`);
            el.firstChild.setAttribute("height", `${height}`);

            el.style.left = left + "px";
            el.style.top = top + "px";
        });

        DIODE_SIZE = Math.abs(DIODE_SIZE*1.05);
        target.style.height = target.offsetHeight*1.05 + "px";
        target.style.width = target.offsetWidth*1.05 + "px";
        scale += 0.05;
    } else {
        target.childNodes.forEach((el) => {
            let width = Math.abs(el.getBBox().width*0.95);
            let height = Math.abs(el.getBBox().height*0.95);
            let left = Math.abs(parseFloat(el.style.left)*0.95);
            let top = Math.abs(parseFloat(el.style.top)*0.95);

            el.querySelectorAll("circle").forEach((cir) => {
                let circleRadius = parseFloat(cir.getAttribute("r"))*0.95;
                let circleLeft = parseFloat(cir.getAttribute("cx"))*0.95;
                let circleTop = parseFloat(cir.getAttribute("cy"))*0.95;
                // console.log(circleRadius, circleLeft, circleTop);

                cir.setAttribute("r", `${circleRadius}`);
                cir.setAttribute("cx", `${circleLeft}`);
                cir.setAttribute("cy", `${circleTop}`);
            });

            el.setAttribute("width", `${width}`);
            el.setAttribute("height", `${height}`);

            el.firstChild.setAttribute("width", `${width}`);
            el.firstChild.setAttribute("height", `${height}`);

            el.style.left = left + "px";
            el.style.top = top + "px";
        });
        
        DIODE_SIZE = Math.abs(DIODE_SIZE*0.95);
        target.style.height = target.offsetHeight*0.95 + "px";
        target.style.width = target.offsetWidth*0.95 + "px";
        scale -= 0.05;
    }
}