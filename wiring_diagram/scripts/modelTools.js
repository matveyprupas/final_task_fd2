let DIODE_SIZE = 50;
var BORDER_WIDTH = "2px";

// Create parent class

class Tools {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.i = 0;

        this.angle = 0;

        this.id = 0;

        this.type = "test";
        this.contacts = [];
      }

    start(view) {
        this.myView = view;
        // this.contactsShift();
    }
    
    contactsShift() {
        this.shiftContacts = []; 
        // let centerToolX = 
        // console.log(parseFloat(this.myView.tool.style.left), this.centerX-workspace.offsetLeft-workspaceFormat.offsetLeft);

        let shiftToolX = parseFloat(this.myView.tool.style.left);
        let shiftToolY = parseFloat(this.myView.tool.style.top);

        for (let i = 0; i < this.contacts.length; i++) {
            let shiftContactX = shiftToolX + this.contacts[i].shiftX;
            let shiftContactY = shiftToolY + this.contacts[i].shiftY;
            this.shiftContacts.push({shiftContactX: shiftContactX, shiftContactY: shiftContactY}); 
        }

        // console.log(this.shiftContacts);
    }

    addEmptyContacts() {
        let res = [];
        res.push(this);
        // this.contactsShift();
        this.shiftContacts.forEach((el)=> {
            res.push(el);
        });

        emptyContacts.push(res);
        // console.log(emptyContacts);
    }
}

// Create extends classes

class Diode extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/logo-diode.svg";
        this.size = DIODE_SIZE;
        this.imgSize = DIODE_SIZE-6;

        this.centerX = this.x - this.size/2;
        this.centerY = this.y - this.size/2;

        this.contacts = [
            {
                shiftX: DIODE_SIZE/20,
                shiftY: DIODE_SIZE/2,
                r: DIODE_SIZE/20,
                connected: false
            },
            {
                shiftX: DIODE_SIZE - DIODE_SIZE/20,
                shiftY: DIODE_SIZE/2,
                r: DIODE_SIZE/20,
                connected: false
            }
        ]
    }
}

class Angle extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/angle-svg.svg";
        this.size = DIODE_SIZE;

        this.centerX = this.x - this.size/2;
        this.centerY = this.y - this.size/2;

        this.contacts = [
            {
                shiftX: DIODE_SIZE/20+4,
                shiftY: DIODE_SIZE/20+2,
                r: DIODE_SIZE/20,
                connected: false
            },
            {
                shiftX: DIODE_SIZE - (DIODE_SIZE/20+2),
                shiftY: DIODE_SIZE - (DIODE_SIZE/20+5),
                r: DIODE_SIZE/20,
                connected: false
            }
        ]
    }
}

class Dot_3 extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/triangle-svg.svg";
        this.size = DIODE_SIZE;

        this.centerX = this.x - this.size/2;
        this.centerY = this.y - this.size/2;

        this.contacts = [
            {
                shiftX: DIODE_SIZE/2-6,
                shiftY: DIODE_SIZE/20+2,
                r: DIODE_SIZE/20,
                connected: false
            },
            {
                shiftX: DIODE_SIZE - (DIODE_SIZE/20+5),
                shiftY: DIODE_SIZE/2-2,
                r: DIODE_SIZE/20,
                connected: false
            },
            {
                shiftX: DIODE_SIZE/2-6,
                shiftY: DIODE_SIZE - (DIODE_SIZE/20+2),
                r: DIODE_SIZE/20,
                connected: false
            }
        ]
    }
}

class Dot_4 extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/cross-angle-svg.svg";
        this.size = DIODE_SIZE;

        this.centerX = this.x - this.size/2;
        this.centerY = this.y - this.size/2;

        this.contacts = [
            {
                shiftX: DIODE_SIZE/2,
                shiftY: DIODE_SIZE/20+1,
                r: DIODE_SIZE/20,
                connected: false
            },
            {
                shiftX: DIODE_SIZE - (DIODE_SIZE/20+3),
                shiftY: DIODE_SIZE/2-2,
                r: DIODE_SIZE/20,
                connected: false
            },
            {
                shiftX: DIODE_SIZE/2,
                shiftY: DIODE_SIZE - (DIODE_SIZE/20+1),
                r: DIODE_SIZE/20,
                connected: false
            },
            {
                shiftX: DIODE_SIZE/20+1,
                shiftY: DIODE_SIZE/2-2,
                r: DIODE_SIZE/20,
                connected: false
            }
        ]
    }
}

class Generator extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/generator-svg.svg";
        this.size = DIODE_SIZE;

        this.centerX = this.x - this.size/2;
        this.centerY = this.y - this.size/2;

        this.contacts = [
            {
                shiftX: DIODE_SIZE/20,
                shiftY: this.size/2,
                r: DIODE_SIZE/20,
                connected: false
            },
            {
                shiftX: DIODE_SIZE - DIODE_SIZE/20,
                shiftY: this.size/2,
                r: DIODE_SIZE/20,
                connected: false
            }
        ]
    }
}

















// all tools placed on workspace

let allToolsOnWorkspace = [];
let emptyContacts = [];
let toolNumber = 0;