#!/usr/bin/env node
console.log('hello test-global-node-cli');

console.log('process.argv: ', process.argv);

const child_process = require('child_process');

const subProcess = child_process.exec('ls', (err, stdout) => {
  if (err) {
    console.log(err);
  }
  console.log(stdout);
  subProcess.kill();
});

// const readline = require('readline');
// const unloadChar='-';
// const loadedChar='#';
// const rl=readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('你想对谁说声hello？ ',answer => {
//     let i = 0;
//     let time = setInterval(()=>{
//         if(i>10){
//             clearInterval(time);
//             readline.cursorTo(process.stdout, 0, 0);
//             readline.clearScreenDown(process.stdout);
//             console.log(`hello ${answer}`);
//             process.exit(0)
//             return
//         }
//         readline.cursorTo(process.stdout,0,1);
//         readline.clearScreenDown(process.stdout);
//         renderProgress('saying hello',i);
//         i++
//     },1000);
// });

// function renderProgress(text,step){
//     const PERCENT = Math.round(step*10);
//     const COUNT = 2;
//     const unloadStr = new Array(COUNT*(10-step)).fill(unloadChar).join('');
//     const loadedStr = new Array(COUNT*(step)).fill(loadedChar).join('');
//     process.stdout.write(`${text}:【${loadedStr}${unloadStr}|${PERCENT}%】`)
// }

const colours = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  
  fg: {
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m",
      crimson: "\x1b[38m" // Scarlet
  },
  bg: {
      black: "\x1b[40m",
      red: "\x1b[41m",
      green: "\x1b[42m",
      yellow: "\x1b[43m",
      blue: "\x1b[44m",
      magenta: "\x1b[45m",
      cyan: "\x1b[46m",
      white: "\x1b[47m",
      crimson: "\x1b[48m"
  }
};

console.log(colours.fg.green, '✔︎', colours.bg.blue, colours.fg.white, "(control + command + space) succ ✔︎", colours.reset);
console.log('process.stdout.columns: ', process.stdout.columns, 'process.stdout.rows: ', process.stdout.rows);
console.log(colours.fg.red, '✘', colours.bg.blue, colours.fg.white, "(control + command + space) fail ✘", colours.reset);