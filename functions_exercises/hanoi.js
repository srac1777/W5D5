// absurd towers of hanoi
// towers of hanoi, the bad way

const readline = require('readline')
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


class Game {
  constructor(){
    this.towers = [[3,2,1],[],[]];
  }

  run(completionCallback){
    this.promptMove(completionCallback);
  }

  promptMove(completionCallback){
    this.printStacks();
    reader.question('From which stack do you want to move?', (res) => {
      let from_pile = parseInt(res);
      if(this.towers[from_pile].length === 0){
        console.log("That stack is empty!");
        this.promptMove();
      } else {
      reader.question('Which stack do you want to move to?', (res) => {
        let to_pile = parseInt(res);
        if(this.valid_move(from_pile,to_pile)){
          this.move(from_pile, to_pile);
          if (!this.isWon()){
            this.run(completionCallback)
          }else{
            completionCallback();
          }
        } else {
         console.log("That is an invalid move.");
         this.promptMove();
        }
      });
      }
    });
    }

    valid_move(from,to) {
      if (this.towers[to].length === 0) {
      return true;
      }
      else if(this.top(from) > this.top(to)) {
        return false;
      } else {
      return true;
      }
    }


  top(pile){
    return this.towers[pile][this.towers[pile].length - 1];
  }

  move(from, to) {
    this.towers[to].push(this.towers[from].pop());
  }

  printStacks(){
    console.log(this.towers);
  }

  isWon(){
    return (this.towers[0].length === 0 && this.towers[1].length === 0) || (this.towers[0].length === 0 && this.towers[2].length === 0);
  }

}

let hanoi = new Game();

hanoi.run(function(){
  console.log('congrats');
  reader.close();
});
