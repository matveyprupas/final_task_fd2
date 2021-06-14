const TYPE_TOOLS = {
    "diode": Diode,
    "line": Diode,
    "angle": Angle,
    "3_dot": Dot_3,
    "4_dot": Dot_4,
    "generator": Generator,
    "resistor": Diode,
};





let tools = document.querySelector(".aside table");
let typeTools = "";
let activeTool = null;

tools.addEventListener("mousedown", markTool);


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
        activeTool.parentNode.classList.add("active_tool");
        typeTools = activeTool.parentNode.dataset.type;
    } else {
        activeTool.classList.add("active_tool");
        typeTools = activeTool.dataset.type;
    }
    console.log(typeTools);
}

function cancelMarkTool(e) {
    if(activeTool instanceof Image) {
        activeTool.parentNode.classList.remove("active_tool");
        typeTools = activeTool.parentNode.dataset.type;
    } else {
        activeTool.classList.remove("active_tool");
        typeTools = activeTool.dataset.type;
    }
}






// Create components by MVC

function createTool(e) {
    if(!TYPE_TOOLS[typeTools]) {
        return;
    }
    console.log("e.clientX: "+e.clientX, "e.clientY: "+e.clientY);
    let tool1=new TYPE_TOOLS[typeTools](e.clientX, e.clientY);

    let tool1View=new ToolsViewSVG();
    let tool1CTRL=new ToolsControllers();
    
    tool1.start(tool1View);
    tool1View.start(tool1,workspaceFormat);
    tool1CTRL.start(tool1,workspaceFormat);

    tool1View.drawTool(workspaceFormat);
    
    // console.log(tool1);
    // console.log(tool1View);
    // console.log(tool1CTRL);
}

workspaceFormat.addEventListener("click", createTool);