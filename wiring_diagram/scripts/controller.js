class ToolsControllers {
    constructor () {
      this.myModel = null; // с какой моделью работаем
      this.myField = null; // внутри какого элемента DOM наша вёрстка
  
      this.self = null;
    }
  
    start(model,field) {
      this.myModel=model;
      this.myField=field;
      this.self = this;
  
      // ищем и запоминаем интересные нам элементы DOM
      // назначаем обработчики событий
  
    //   this.startBtn = this.myModel.myView.clockContainer.querySelector('.start__button');
    //   this.stopBtn = this.myModel.myView.clockContainer.querySelector('.stop__button');
  
    //   this.startBtn.addEventListener("click", this.startClock.bind(this));
    //   this.stopBtn.addEventListener("click", this.stopClock.bind(this));
  
      // console.log(this.startBtn);
      // console.log(this.myModel.updateView);
    }
}