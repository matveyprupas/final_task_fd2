let DIODE_SIZE = 50;

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

class Angle extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/angle-svg.svg";
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

class Dot_3 extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/triangle-svg.svg";
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

class Dot_4 extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/cross-angle-svg.svg";
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

class Generator extends Tools {
    constructor(x, y) {
        super(x, y);

        this.img = "./assets/imgs/generator-svg.svg";
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

















// Create workspace model

class Workspace {
    constructor(format) {
        this.format = format;

        this.y = y;

        this.angle = 0;

        this.id = 0;

        this.type = "test";

      }

    start(view) {
        this.myView = view;    
    }
}