// const SVG_NS = "http://www.w3.org/2000/svg";
const TOOL_SIZE = 6;




class Tools {
    constructor() {
        
        this.width = TOOL_SIZE;
        this.height = TOOL_SIZE;

    }
}



function creationTool (name) {
    let tool = document.createElementNS(SVG_NS, "svg");
    tool.classList.add("toolElement");
    // tool.setAttribute("width", "400");
    // tool.setAttribute("height", "400");

    let line = document.createElementNS(SVG_NS, "line");
    line.classList.add("SVG_line");
    line.setAttribute("stroke-width", "1");
    line.setAttribute("x1", `20`);
    line.setAttribute("y1", `20`);
    line.setAttribute("x2", `500`);
    line.setAttribute("y2", `200`);


    tool.appendChild(line);
    workspaceFormat.appendChild(tool);
} 

// creationTool();