// let $evehn = 1;

// while($evehn <= 5){
//   console.log("OK");
//   $evehn++;
// }

// let $names = ["Evehn", "Leonard", "Joko", "Rogie", "Mary"]
// let $num = 0;
// let $name = "Evehn";

// while($names[$num]){
//   console.log($names[$num]);
//   $num--;

//   if($num === 2){
//     break;
//   }
// }

// while($names[$num]){
//   if($names[$num] === $name){
//     console.log($names[$num]);
//     break;
//   }
//   $num++;
// }

// let array = [1, 2, 3, 4, 5];

// for (let index = array.length - 1; index >= 0; index--) {
//   console.log(array[index]);
// }


let $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let $summary = 0;
let $number = 0;

while($numbers[$number]){
  $summary += $numbers[$number];
  $number++; 
}

console.log($summary);