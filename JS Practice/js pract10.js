// let $me = {
//   firstName: "Evehn",
//   lastName: "Kadusale",
//   age: 22,
//   hobbies:["Tulog", "CrossFire", "Javascript"],
//   pets:{
//     pet1:{
//       petName: "Yuri",
//       petType: "Cat"
//     },
//     pet2:{
//       petName: "WitWit",
//       petType: "Dog"
//     }
//   }
// };

// console.log($me);
// console.log($me["lastName"]);
// console.log(`Hi I'm ${$me.firstName} ${$me.lastName}, I'm ${$me.age} years old, nice to meet you!`);
// console.log($me["pets"]["pet1"]["petName"]);
// console.log($me["pets"]["pet1"]["petType"]);
// console.log($me.pets["pet2"].petName);
// console.log($me.pets["pet2"].petType);

// $me["firstName"] = "Joko";
// console.log($me.firstName);

// $me.lastName = "Gadingan";
// $me["middleName"] = "Pasilan";
// console.log($me);

// let $meStr = JSON.stringify($me);
// console.log($meStr);

// let $meParse = `{"firstName":"Evehn","lastName":"Kadusale","age":22}`;
// let $parse = JSON.parse($meParse);
// console.log($parse);

// let $reklamador = [
//   {
//     firstName: "Evehn",
//     lastName: "Kadusale"
//   },
//   {
//     firstName: "Leonard",
//     lastName: "Leaño"
//   },
//   {
//     firstName: "Joko",
//     lastName: "Gadingan"
//   }
// ];

// console.log($reklamador);
// console.log($reklamador[1].firstName);
// console.log(`${$reklamador[0].firstName}, ${$reklamador[1].firstName}, ${$reklamador[2].firstName}`);

let $array = [
  {
    personName: "Evehn Kadusale",
    personAge: 22,
    personHobby: "Playing CrossFire"
  },
  {
    personName: "Leonard Leaño",
    personAge: 23,
    personHobby: "Creating Art" 
  },
  {
    personName: "Joko Gadingan ",
    personAge: 22,
    personHobby: "Coding Program"
  }
];

console.log($array);
for (let $i = 0; $i < $array.length; $i++){
  console.log(`First Name: ${$array[$i].personName}`);
  console.log(`Age:        ${$array[$i].personAge}`);
  console.log(`Hobby:      ${$array[$i].personHobby}`);
  console.log("");
}