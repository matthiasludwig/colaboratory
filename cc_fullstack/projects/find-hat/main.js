const prompt = require('prompt-sync')({ sigint: true });

class Field {
  constructor(map) {
    this.field = map;
    this.rowLength = map[0].length;
    this.colLength = map.length;
    this.done = false;
  }

  // Getter & Setter
  get status() {
    return this.done;
  }

  // Helper function
  print() {
    console.clear();
    for (const i of this.field) {
      console.log(i.join(''));
    }
  }

  findLocation() {
    let result;

    for (const i in this.field) {
      const index = this.field[i].findIndex((char) => char === '*');
      if (index !== -1) {
        result = [Number(i), index];
        break;
      }
    }
    return result;
  }

  // Movement
  checkBounds(newPosition) {
    const lowerRightBound = !!(newPosition[0] < this.rowLength && newPosition[1] < this.colLength);
    const upperLeftBound = !!(newPosition[0] >= 0 && newPosition[1] >= 0);
    return (lowerRightBound && upperLeftBound);
  }

  checkEnd(newPosition) {
    if (this.field[newPosition[0]][newPosition[1]] === '0') {
      this.done = true;
      console.log('Game Over: You fell in the hole!');
      return false;
    }
    if (this.field[newPosition[0]][newPosition[1]] === '^') {
      this.done = true;
      console.log('You won! Found the hat!');
      return false;
    }
  }

  changePosition(change) {
    const currentPosition = this.findLocation();
    const newPosition = [(currentPosition[0] + change[0]), (currentPosition[1] + change[1])];
    if (this.checkBounds(newPosition)) {
      if (!(this.checkEnd(newPosition))) {
        this.field[currentPosition[0]][currentPosition[1]] = '░';
        this.field[newPosition[0]][newPosition[1]] = '*';
      }
    } else {
      console.log('Out of bounds!');
    }
  }

  // Generate Field
  static generateField(row, col, prob) {
    const map = [];
    for (let r = row; r > 0; r -= 1) {
      const rowArr = [];
      for (let c = col; c > 0; c -= 1) {
        rowArr.push(((Math.random() > prob) ? '░' : '0'));
      }
      map.push(rowArr);
    }
    map[0][0] = '*';
    map[row - 1][col - 1] = '^';
    return map;
  }
}

// Start the Program
const checkInput = (char, gameMap) => {
  switch (char) {
    case 'd':
      gameMap.changePosition([1, 0]);
      break;
    case 'u':
      gameMap.changePosition([-1, 0]);
      break;
    case 'l':
      gameMap.changePosition([0, -1]);
      break;
    case 'r':
      gameMap.changePosition([0, 1]);
      break;
    default:
      console.log('Please make a valid choice (q, d, u, l, r)');
  }
};

const field = new Field(Field.generateField(5, 5, 0.2));

while (!field.status) {
  field.print();
  const movementInput = prompt('Which way?');

  if (movementInput === 'q') {
    field.done = true;
  } else {
    checkInput(movementInput, field);
  }
}
