const COLOR_BG_TOOLS_ACTIVE = "pink";
const COLOR_BG_TOOLS_PASSIVE = "white";









let tools = document.querySelector(".aside table");
// console.log(tools); 

tools.addEventListener("mousedown", markTool);

// tools.addEventListener("mouseover", (e)=>e.preventDefault());
// tools.addEventListener("mouseup", cancelMarkTool);

let activeTool = null;

function markTool(e) {
    e.preventDefault();
    let labelTable = tools.querySelector("th");

    if (activeTool) {
        cancelMarkTool();
    }

    activeTool = e.target;
    
    if (activeTool === labelTable) {
        return;
    }

    if(activeTool instanceof Image) {
        activeTool.parentNode.style.backgroundColor = COLOR_BG_TOOLS_ACTIVE;
    } else {
        activeTool.style.backgroundColor = COLOR_BG_TOOLS_ACTIVE;
    }
}

function cancelMarkTool(e) {
    if(activeTool instanceof Image) {
        activeTool.parentNode.style.backgroundColor = COLOR_BG_TOOLS_PASSIVE;
    } else {
        activeTool.style.backgroundColor = COLOR_BG_TOOLS_PASSIVE;
    }
}