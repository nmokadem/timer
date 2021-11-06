const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("close", function() {
  console.log("\nThanks for using me, ciao!");
  process.exit(0);
});

const beep = function(ch) {
  let thisTime = 0;
  let soundBeep = false;

  if (ch !== 'b' && ch > 0 && ch < 9) {
    if (ch === 'b')
      thisTime = 0;
    else
      thisTime = ch;

    thisTime = thisTime * 1000;
    soundBeep = true;
  }

  setTimeout(() => {
    if (soundBeep) {
      process.stdout.write('\x07');
    }

    rl.question("Enter b,1-9 : ", function(ch) {
      beep(ch);
    });

  },thisTime);
};
beep('');

/*
The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
*/