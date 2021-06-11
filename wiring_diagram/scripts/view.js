// CONST declaration

// const CLOCK_RADIUS = 100;
// const NUM_CIRCLE_RADIUS = 15;
// const NUM_CLOCK_DISTANCE = 150;
// const HOURS_ARROW_LENGTH = 65;
// const MINUTES_ARROW_LENGTH = 80;
// const SECONDS_ARROW_LENGTH = 90;
const SVG_NS = "http://www.w3.org/2000/svg";
const XLINK = "http://www.w3.org/1999/xlink";
const DIODE_SIZE = 50;

// Create Clock's class

class ToolsViewSVG {
  constructor() {
    this.myModel = null; // с какой моделью работаем
    this.myField = null; // внутри какого элемента DOM наша вёрстка

    this.tool = null;
  }


  start(model,field) {
    this.myModel=model;
    this.myField=field;
  }

  drawTool(field) {

    // Create new tool

    this.tool = document.createElementNS(SVG_NS, "svg");
    this.tool.classList.add("svg_tool");
    this.tool.setAttribute("width", `${this.myModel.size}`);
    this.tool.setAttribute("height", `${this.myModel.size}`);

    this.img = document.createElementNS(SVG_NS, "image");
    this.img.setAttributeNS(XLINK, "href", this.myModel.img);
    this.img.setAttribute("width", `${this.myModel.size}`);
    this.img.setAttribute("height", `${this.myModel.size}`);

    this.tool.append(this.img);
    field.append(this.tool);

    this.tool.style.left = this.myModel.centerX-field.offsetLeft-field.parentNode.offsetLeft;
    this.tool.style.top = this.myModel.centerY-field.offsetTop-field.parentNode.offsetTop;
    // console.log(field.parentNode.offsetLeft);

  }

  update(angleH, angleM, angleS) {
    // this.secondsArrow.style.transform = `rotate(${angleS}deg)`;
    // this.minutesArrow.style.transform = `rotate(${angleM}deg)`;
    // this.hoursArrow.style.transform = `rotate(${angleH}deg)`;
  }
}