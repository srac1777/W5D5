const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr);
      // reader.close();
    }
  }
  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1,el2,callback){
  reader.question(`Is ${el1} greater than ${el2}?`, (res) => {
    if(res === 'yes'){
      callback(true);
    } else if (res === 'no') {
      callback(false);
    } else {
      console.log("Please respond with yes or no");
      askIfGreaterThan(el1,el2,callback);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < arr.length - 1){
    askIfGreaterThan(arr[i],arr[i+1], (isgreaterthan) => {
      if(isgreaterthan){
        madeAnySwaps = true;
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }else{
    outerBubbleSortLoop(madeAnySwaps);
  }
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
