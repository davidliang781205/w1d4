// Exercise 1 -----------------------

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var i = 0

  return function() {
    /* your code here */
    if (i > list.length - 1) {i = 0;}
    return list[i++];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


console.log('------------------');
// Exercise 2 -----------------------
var countdownGenerator = function (x) {
  /* your code here */

  return function(){
    if (x > 0){
      console.log('T-minus ' + x + '...');
      x--;
    } else if (x === 0){
      console.log('Blast off!');
      x = -1;
    } else if (x === -1){
      console.log('Rockets already gone, bub!');
    }

  };

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!




