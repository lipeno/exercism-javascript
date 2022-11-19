// @ts-check

// using prototype syntax
export function Size (width = 80, height = 60){
  this.width = width;
  this.height = height;
};

Size.prototype.resize = function (width, height){
  this.width = width;
  this.height = height;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (x, y){
  this.x = x;
  this.y = y;
};

// using class syntax
export class ProgramWindow{
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize (size){
    if (size.width >= 1 && size.height >= 1) {
      if (size.width >= this.screenSize.width - this.position.x) size.width = this.screenSize.width - this.position.x;
      if (size.height >= this.screenSize.height - this.position.y) size.height = this.screenSize.height - this.position.y;
      this.size.resize(size.width, size.height);
    }
    else{
      this.size.resize(1, 1);
    }
  }
  move (position){
    if (position.x >= 0 && position.y >= 0) {
      if (position.x > (this.screenSize.width - this.size.width)) position.x = this.screenSize.width - this.size.width;
      if (position.y > (this.screenSize.height - this.size.height)) position.y = this.screenSize.height - this.size.height;
      this.position.move(position.x, position.y);
    } else {
      this.position.move(0, 0);
    }
  }
}

export function changeWindow (programWindow){
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}