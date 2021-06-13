// Create parent class

class Tools {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.angle = 0;

        this.id = 0;

        this.type = "test";

      }

    start(view) {
        this.myView = view;    
    }
}

// Create extends classes

class Diode extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/logo-diode.svg";
        this.size = DIODE_SIZE;

        this.centerX = this.x - this.size/2;
        this.centerY = this.y - this.size/2;

        this.contacts = {
            1: {
                x: this.x,
                y: this.y - this.size/2
            },
            2: {
                x: this.x + this.size,
                y: this.x - this.size/2
            }
        }
    }
}



























// function creationTool (name) {
//     let tool = document.createElementNS(SVG_NS, "svg");
//     tool.classList.add("toolElement");
//     // tool.setAttribute("width", "400");
//     // tool.setAttribute("height", "400");

//     let line = document.createElementNS(SVG_NS, "line");
//     line.classList.add("SVG_line");
//     line.setAttribute("stroke-width", "1");
//     line.setAttribute("x1", `20`);
//     line.setAttribute("y1", `20`);
//     line.setAttribute("x2", `500`);
//     line.setAttribute("y2", `200`);


//     tool.appendChild(line);
//     workspaceFormat.appendChild(tool);
// } 

// creationTool();