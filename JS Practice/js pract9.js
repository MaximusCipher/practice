// let $names = ["Evehn", "Leonard", "Joko", "Rogie", "Mary"];
// let $x = 0;
// let $i = $names.length-1;

// for ($i; $i >= 0; $i--){
//   console.log($names[$i]);
// }

// for ($x; $x < $names.length;$x++){
//   console.log($names[$x]);

//   if ($x === 0){
//     break;
//   }
// }

// for (let $y in $names){
//   console.log($names[$y]);
// }

// for (let $person of $names){
//   console.log($person);
// }

let $names = ["Evehn", "Leonard", "Joko", "Rogie", "Mary"];
let $name = "joko";
let $found = false;
let $i = 0;

// for ($i; $i < $names.length; $i++){
//   if ($names[$i].toLowerCase() === $name.toLowerCase()){
//     $found = true;
//     console.log(`Found ${$names[$i]}.`);
//     break;
//   }
// }

// if (!$found) console.log ("Not Found.");


// for ($i in $names){
//   if ($names[$i].toLowerCase() === $name.toLowerCase()){
//     $found = true;
//     console.log(`Found ${$names[$i]}.`);
//     break;
//   }
// }
// if (!$found) console.log("Not Found.");

for (let $x of $names){
  if ($x.toLowerCase() === $name.toLowerCase()){
    $found = true;
    console.log(`Found ${$x}.`);
    break;
  }
}
if (!$found) console.log("Not Found.");
