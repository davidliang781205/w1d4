// // The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// ***************** forEach *********************
var list = ["Alice", "Bob", "Waldo", "Winston"];

list.forEach(function(para){
  if (para === "Waldo"){
    console.log("Found Waldo at index " + list.indexOf(para) + "!");
  }
});

