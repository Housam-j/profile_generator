const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s an activity you like doing?', (answer1) => {
  rl.question('What do you listen to while doing that?', (answer2) => {
    rl.question('What do you think this task for? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        console.log(`So, you like doing ${answer1}\n` + `and like listening to ${answer2} while doing that \n` + `and you think tjhis survey is for ${answer3}\n` + `and your favorite meal is${answer4}`);
     
        rl.close();
    
      });
    });
  });
});
