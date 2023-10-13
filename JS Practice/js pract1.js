let name1 = 'Alenere';
let name2 = 'David';
let pronoun = 'she';
let coffee = 'coffee';

alert(
  name1 +
    ', ' +
    'the friendly neighbor, waved at ' +
    name2 +
    ' as ' +
    pronoun +
    ' walked by ' +
    name2 +
    "'s house. " +
    name2 +
    ' smiled back and invited ' +
    name1 +
    ' in for a cup of ' +
    coffee +
    '.'
);
console.log(
  name1 +
    ', ' +
    'the friendly neighbor, waved at ' +
    name2 +
    ' as ' +
    pronoun +
    ' walked by ' +
    name2 +
    "'s house. " +
    name2 +
    ' smiled back and invited ' +
    name1 +
    ' in for a cup of ' +
    coffee +
    '.'
);
document.getElementById('htmlbody').innerHTML =
  name1 +
  ', ' +
  'the friendly neighbor, waved at ' +
  name2 +
  ' as ' +
  pronoun +
  ' walked by ' +
  name2 +
  "'s house. " +
  name2 +
  ' smiled back and invited ' +
  name1 +
  ' in for a cup of ' +
  coffee +
  '.';
