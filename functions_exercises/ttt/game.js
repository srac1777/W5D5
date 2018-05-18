const Board = require('./board');

Array.prototype.all = function(){
  let value = self[0];
  self.forEach( (el) => {
    if (el != value || el == undefined){
      return false;
    }
  });
  return true;
}

class Game {
  constructor() {
    this.board = new Board;
    // this.current_player = reader;
  }

  run(reader, completionCallback){

  }

  getMove(player1){

  }

  isWon(){
  let winning_positions = winning_positions();
    winning_positions.forEach( (position) => {
      if (position.all()){
        return true;
      }
    });
    return false;
  }

  winning_positions(){
    let cols = this.cols();
    let rows = this.rows();
    let diagonals = this.diagonals();
    return cols.concat(rows).concat(diagonals);
  }

  cols(){
    let cols = [];
    for(let i = 0; i < 3; i++){
      let col_set = [];
      col_set.push([0, i]);
      col_set.push([1, i]);
      col_set.push([2, i]);
      cols.push(col_set);
    }
    return cols;
  }

  rows(){
    let rows = [];
    for(let i =0; i < 3; i++){
      let row_set = [];
      row_set.push([i, 0]);
      row_set.push([i, 1]);
      row_set.push([i, 2]);
      rows.push(row_set);
    }
    return rows;
  }



  diagonals(){
    return [[[0,0], [1,1], [2,2]], [[0,2], [1,1], [2,0]]];
  }
}

let game = new Game();
