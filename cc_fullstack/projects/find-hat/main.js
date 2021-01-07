const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.rowLength = field[0].length;
    this.colLength = field.length;
    this._done = false;
  }

  //Getter & Setter
  get status() {
      return this._done;
  }


  // Helper function
  print() {
    console.clear();
    for (const i of this.field) {
      console.log(i.join(''));
    }
  }
  findLocation() {
    let result = undefined;

    for (const i in this.field) {
      let index = this.field[i].findIndex(char => char === '*')
      if (index != -1) {
        result = [Number(i), index]
        break;
      }
    }
    return result;
  }

  // Movement
  checkBounds(newPosition) {
    let lowerRightBound = (newPosition[0] < this.rowLength && newPosition[1] < this.colLength) ? true : false;
    let upperLeftBound = (newPosition[0] >= 0 && newPosition[1] >= 0) ? true : false;
    return (lowerRightBound && upperLeftBound);
  }
  checkEnd(newPosition) {
      if (this.field[newPosition[0]][newPosition[1]] === '0') {
          this._done = true;
          console.log("Game Over: You fell in the hole!")
          return false;
      }
      else if (this.field[newPosition[0]][newPosition[1]] === '^') {
          this._done = true;
          console.log("You won! Found the hat!");
          return false;
      }
  }
  changePosition(change) {
    let currentPosition = this.findLocation();
    let newPosition = [(currentPosition[0] + change[0]), (currentPosition[1] + change[1])];
    if (this.checkBounds(newPosition)) {
        if (!(this.checkEnd(newPosition))) {
            this.field[currentPosition[0]][currentPosition[1]] = '░';
            this.field[newPosition[0]][newPosition[1]] = '*';
        }
    }
    else {
        console.log("Out of bounds!");
    }
  }

    //Generate Field
    static generateField(row, col, prob) {
        let map = []
        for (let r = row; r > 0; r--) {
            let rowArr = []
            for (let c = col; c > 0; c--) {
                rowArr.push(((Math.random() > prob) ? '░' : '0'));
            }
            map.push(rowArr);
        }
        map[0][0] = '*';
        map[row - 1][col - 1] = "^";
        return map;
      }
}

// Start the Program
const checkInput = (char, field) => {
    switch(char) {
        case 'd':
            field.changePosition([1, 0])
            break;
        case 'u':
            field.changePosition([-1, 0])
            break;
        case 'l':
            field.changePosition([0, -1])
            break;
        case 'r':
            field.changePosition([0, 1])
            break;
        default:
            console.log("Please make a valid choice (q, d, u, l, r)");
    }  
}

const field = new Field(Field.generateField(5, 5, .2))

while(!field.status) {
  field.print();
  let movementInput = prompt("Which way?");

  if (movementInput === 'q') {
      field._done = true;
  }
  else {
    checkInput(movementInput, field);
  }
}
