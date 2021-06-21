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

let allContacts = [];



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
    // console.log(typeTools);
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
    // console.log(typeTools);
}






// Create components by MVC

workspaceFormat.addEventListener("click", createTool);
window.addEventListener("keydown", (e) => {
    if(e.key === "Delete") removeTool(e);
});

function createTool(e) {
    if(!TYPE_TOOLS[typeTools] || typeTools === "choose") {
        return;
    }
    // console.log(TYPE_TOOLS[typeTools]);
    // console.log("e.clientX: "+e.clientX, "e.clientY: "+e.clientY);

    let tool1=new TYPE_TOOLS[typeTools](e.clientX, e.clientY);
    let tool1View=new ToolsViewSVG();
    let tool1CTRL=new ToolsControllers();
    
    tool1.start(tool1View);
    tool1View.start(tool1,workspaceFormat);
    tool1CTRL.start(tool1,workspaceFormat);

    tool1View.drawTool(workspaceFormat);
    tool1.contactsShift();
    tool1.addEmptyContacts(tool1View);

    allToolsOnWorkspace.push(tool1);
    allContacts.push(tool1.shiftContacts);

    connectContacts(tool1);
    // console.log(allToolsOnWorkspace);
    // console.log(allContacts);
    // console.log(tool1View);
    // console.log(tool1CTRL);
}

function removeTool(e) {
    let id;
    choosedTools.forEach((el) => {
        if(el.tagName === "svg") {
            id = parseFloat(el.dataset.number);
            delete allToolsOnWorkspace[id];
            delete emptyContacts[id];
        }        
        el.style.display = "none";
        el.classList.remove("svg_tool_activated");
        addNodesToChoosedTools();
    });
}

function connectContacts (node) {
    let model;
    if(node.tagName === "image") {
        model = allToolsOnWorkspace[+node.parentNode.dataset.number];
    } else {
        model = node;
    }

    model.contactsShift();
    // model.shiftContact
    // emptyContacts.forEach((el) => {
    //     if (el === model) console.log("true");
    //     for (let i = 0; i < el.length; i++) {
            // console.log(el[i].shiftContactX);
    //     }
    // });

    
    
    // model.addEmptyContacts();
    // allContacts is Array
    console.log(model);
}





// Choose tools

let choosedTools = {};
// let allConnectors = {};

workspaceFormat.addEventListener("mousedown", eTargetOffsetStartInit);
workspaceFormat.addEventListener("click", chooseTools);
workspaceFormat.addEventListener("click", addNodesToChoosedTools);



function addNodesToChoosedTools() {
    choosedTools = workspaceFormat.querySelectorAll(".svg_tool_activated");
    // choosedTools.forEach()
    // console.log(Tools);
    // console.log(allConnectors);
}

function chooseTools (e) {
    if (e.target === workspaceFormat || typeTools !== "choose") {
        return;
    }

    if(!e.target.classList.contains("svg_tool_activated")) {
        e.target.eTargetOffsetLeftEnd = (e.target.style.left === "") ? parseFloat(e.target.parentNode.style.left) : parseFloat(e.target.style.left);
        e.target.eTargetOffsetTopEnd = (e.target.style.top === "") ? parseFloat(e.target.parentNode.style.top) : parseFloat(e.target.style.top);

        // console.log("endLeft: " + e.target.eTargetOffsetLeftEnd, "endTop: " + e.target.eTargetOffsetTopEnd);

        if(e.target.eTargetOffsetLeftEnd !== e.target.eTargetOffsetLeftStart || e.target.eTargetOffsetTopEnd !== e.target.eTargetOffsetTopStart) return;

        e.target.classList.add("svg_tool_activated");
        if (e.target.parentNode === workspaceFormat) {
            return;
        }
        e.target.parentNode.classList.add("svg_tool_activated");
    } else if(e.target.classList.contains("svg_tool_activated")) {
        e.target.eTargetOffsetLeftEnd = (e.target.style.left === "") ? parseFloat(e.target.parentNode.style.left) : parseFloat(e.target.style.left);
        e.target.eTargetOffsetTopEnd = (e.target.style.top === "") ? parseFloat(e.target.parentNode.style.top) : parseFloat(e.target.style.top);

        // console.log("endLeft: " + e.target.eTargetOffsetLeftEnd, "endTop: " + e.target.eTargetOffsetTopEnd);

        if(e.target.eTargetOffsetLeftEnd !== e.target.eTargetOffsetLeftStart || e.target.eTargetOffsetTopEnd !== e.target.eTargetOffsetTopStart) return;

        e.target.classList.remove("svg_tool_activated");
        if (e.target.parentNode === workspaceFormat) {
            return;
        }
        e.target.parentNode.classList.remove("svg_tool_activated");
    }
    // console.log(choosedTools);

}

function eTargetOffsetStartInit (e) {
    e.target.eTargetOffsetLeftStart = (e.target.style.left === "") ? parseFloat(e.target.parentNode.style.left) : parseFloat(e.target.style.left);

    e.target.eTargetOffsetTopStart = (e.target.style.top === "") ? parseFloat(e.target.parentNode.style.top) : parseFloat(e.target.style.top);

    // console.log("startLeft: " + e.target.eTargetOffsetLeftStart, "startTop: " + e.target.eTargetOffsetTopStart)
}

// Move tools 

workspaceFormat.addEventListener("mousedown", startMoveTools);
window.addEventListener("mouseup", stopMoveDOM);
window.addEventListener("mouseout", stopMoveDOM);


function startMoveTools(e) {
    e.preventDefault();
    if(e.target === workspaceFormat || typeTools !== "choose" || !e.target.classList.contains("svg_tool_activated")) return;

    // console.log(moveTools);

    let eTargetOffsetLeft = (e.target.style.left === "") ? e.target.parentNode.style.left : e.target.style.left;
    let eTargetOffsetTop = (e.target.style.top === "") ? e.target.parentNode.style.top : e.target.style.top;

    let shiftLeft = e.clientX - parseFloat(eTargetOffsetLeft);
    let shiftTop = e.clientY - parseFloat(eTargetOffsetTop); 

    

    e.target.onmousemove = function(e){
        e.preventDefault();
        e.target.style.cursor = "move";
        
        e.target.style.left = (e.clientX - shiftLeft) + "px";
        e.target.style.top = (e.clientY - shiftTop) + "px";
        e.target.parentNode.style.left = (e.clientX - shiftLeft) + "px";
        e.target.parentNode.style.top = (e.clientY - shiftTop) + "px";

        // console.log(e.clientX, shiftLeft);
        connectContacts(e.target);
    };

    // connectContacts(e.target);
}

function stopMoveTools(e) {
    e.preventDefault();
    e.target.onmousemove = null;
    e.target.style.cursor = "default";
    target = null;
    // connectContacts(e);
}