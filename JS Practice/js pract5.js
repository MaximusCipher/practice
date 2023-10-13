let $grade = 101;

if ($grade > 100) {
  console.log('Invalid Grade');
} else if ($grade >= 98) {
  console.log('With Highest Honor');
} else if ($grade >= 95) {
  console.log('With High Honor');
} else if ($grade >= 90) {
  console.log('With Honor');
} else if ($grade >= 75) {
  console.log('Passed');
} else {
  console.log('Failed');
}
