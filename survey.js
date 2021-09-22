const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s an activity you like doing?', (answer1) => {
  rl.question('What do you listen to while doing that?', (answer2) => {
    rl.question('What do you think this task for? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
    console.log(`Which sport is your absolute favourite?: ${answer1}` + `${answer2}`+`${answer3}`+`${answer4}`);
     
    rl.close();
    
})})})});
