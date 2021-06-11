const TYPE_TOOLS = {
    "diode": Diode,
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

    let tool1=new TYPE_TOOLS[typeTools](e.clientX, e.clientY);

    let tool1View=new ToolsViewSVG();
    let tool1CTRL=new ToolsControllers();
    
    tool1.start(tool1View);
    tool1View.start(tool1,workspaceFormat);
    tool1CTRL.start(tool1,workspaceFormat);

    tool1View.drawTool(workspaceFormat);
    
    console.log(tool1);
    console.log(tool1View);
    console.log(tool1CTRL);
}

workspaceFormat.addEventListener("click", createTool);

// var clock1=new Clock("Your Location");
// var clock1View=new ClockView();
// var ctrlBtn1=new ClockControllerButtons();

// var clock2=new Clock("New York");
// var clock2View=new ClockView();
// var ctrlBtn2=new ClockControllerButtons();

// увязываем компоненты друг с другом
// указываем компонентам, в каком DOM им работать
// var containerElem=document.querySelector('.dom__clock');



// clock2.start(clock2View);
// clock2View.start(clock2,containerElem);
// ctrlBtn2.start(clock2,containerElem);