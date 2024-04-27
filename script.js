var final=[];
var limit=prompt("How many digits?");
function fizzbuzz(i) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      return "fizzbuzz";
    } else {
      return "fizz";
    }
  }else if (i%5==0){
  return "buzz";
  }else{
  return ` ${i}`;
  }
}

for (var i = 1; i <= limit; i++) {
  final.push(fizzbuzz(i));
}
document.querySelector("a").textContent = final
