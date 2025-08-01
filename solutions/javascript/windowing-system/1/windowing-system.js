// @ts-check

// Position,
// ProgramWindow,
// Size,
// changeWindow,
/**
 * The Size class for storing the dimensions of the window
 * @param {number | undefined} width
 * @param {number | undefined} height
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (
  /** @type {number} */ newWidth,
  /** @type {number} */ newHeight
) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * The Position class to store a window position
 * @param {number | undefined} x
 * @param {number | undefined} y
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (
  /** @type {number} */ newX,
  /** @type {number} */ newY
) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * @param {Position} position
   */
  move(position) {
    if (position.x < 0) position.x = 0;
    if (position.y < 0) position.y = 0;
    if (position.x > this.position.x) position.x = this.position.x;
    if (position.y > this.position.y) position.y = this.position.y;

    this.position.x = position.x;
    this.position.y = position.y;
  }

  /**
   * @param {Size} size
   */
  resize(size) {
    if (size.width < 1) size.width = 1;
    if (size.height < 1) size.height = 1;
  }
}

/**
 * This function  accepts a ProgramWindow instance and
 * changes the window to the specified size and position
  @param {ProgramWindow}  programWindow
 */
export const changeWindow = (/** @type {ProgramWindow} */ programWindow) => {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
};
