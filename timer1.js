const beep = function(thisArray) {
  for (let time of thisArray) {
    setTimeout(() => {
      process.stdout.write('\x07');
    },time);
  }
};

if (process.argv.length === 2) {
  console.log("Usage: node timer1.js number numbeer number");
  console.log("       where each number is the number of seconds you would like");
  console.log("       to hear a beep");
  process.stdout.write('\x07');  //Beep
} else {
  let thisArray = process.argv.filter(x => x > 0 && x && !isNaN(x))
    .map(x => x * 1000)
    .sort((a, b) => a - b);
  console.log(thisArray);
  beep(thisArray);
}


/*
process.stdout.write('\x07');  //Beep

node timer1.js 10 3 5 15 9
This will make it beep at

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/