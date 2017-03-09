// // The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
      console.log(i);
    }
  }
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// ***************** forEach *********************
var list = ["Alice", "Bob", "Waldo", "Winston"];

list.forEach(function(para){
  if (para === "Waldo"){
    console.log("Found him! He is at index " + list.indexOf(para)) + '.';
  }
})

