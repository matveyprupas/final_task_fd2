const TYPE_TOOLS = {
    "diode": Diode,
    "line": Diode,
    "angle": Angle,
    "3_dot": Dot_3,
    "4_dot": Dot_4,
    "generator": Generator,
    "resistor": Diode,
    "choose": "chooseTools"
};





let tools = document.querySelector(".aside table");
let typeTools = "";
let activeTool = null;

tools.addEventListener("mousedown", markTool);
window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") cancelMarkTool(e);
});


function markTool(e) {
    e.preventDefault();
    let labelTable = tools.querySelector("th");

    if (activeTool) {
        cancelMarkTool(e);
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
    if(e.key === "Escape") {
        let activeTool = tools.querySelector(".active_tool");
        if (activeTool) activeTool.classList.remove("active_tool");
        typeTools = "";
    }
    console.log(typeTools);
}






// Create components by MVC

function createTool(e) {
    if(!TYPE_TOOLS[typeTools] || typeTools === "choose") {
        return;
    }
    console.log(TYPE_TOOLS[typeTools]);
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
workspaceFormat.addEventListener("click", chooseTools);






// Choose tools

function chooseTools (e) {
    if (e.target === workspaceFormat || typeTools !== "choose") {
        return;
    }
    if (e.target instanceof SVGElement) {
    } else if (e.target instanceof SVGViewElement) {
    } else {
    }
    
    e.target.classList.toggle("svg_tool_activated");
    if (e.target.parentNode === workspaceFormat) {
        return;
    }
    e.target.parentNode.classList.toggle("svg_tool_activated");
}


// Move tools 

workspaceFormat.addEventListener("mousedown", startMoveTools);
window.addEventListener("mouseup", stopMoveDOM);
window.addEventListener("mouseout", stopMoveDOM);

function startMoveTools(e) {
    e.preventDefault();
    let moveTools = workspaceFormat.querySelectorAll(".svg_tool_activated");
    console.log(moveTools);

    if (e.which === 1) {        
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

function stopMoveTools(e) {
    e.preventDefault();
    e.target.onmousemove = null;
    e.target.style.cursor = "default";
    target = null;
}