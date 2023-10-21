/* let $age = 12;
let $hasDegree = true; */

let $age = 18;
let $isRegistered = true;

/* 
if ($age >= 18 && $hasDegree === true) {
  alert('Good for employment.');
} else {
  alert('Not Good for employment');
}
 */

/* if ($age >= 18 || $hasDegree === "hindi"){
  alert("WOW");
}else{
  alert("NO!");
} */

//alert(!$hasDegree);

/* if ($age >= 18){
  if ($hasDegree){
    console.log("Tanggap ka na!")
  }else{
    console.log("wala kang degree, aral ka muna");
  }
}else{
  console.log("Bawal ka rito!");
} */

if ($isRegistered){
  if ($age >= 18){
    console.log("Valid Voter");
  }else if($age < 18){
    console.log("Invalid Voter");
  }
}else if ($isRegistered === false){
  if ($age >= 18){
    console.log("Register First")
  }else if($age < 18){
    console.log("Non-Voter");
  }
}

if ($isRegistered && $age >= 18){
  console.log("Valid Voter");
}else if(!$isRegistered && $age >= 18){
  console.log("Register First");
}else if($isRegistered && $age < 18){
  console.log("Invalid voter");
}else if(!$isRegistered && $age < 18){
  console.log("Non-Voter");
}