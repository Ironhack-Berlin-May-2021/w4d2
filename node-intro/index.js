// console.log('hello node js 🙂');
// run it : node <nameOfTheFile>
// this is not accessible in node
// console.log(document);
// console.log(global);
// console.log(process.platform);

const chalk = require('chalk');
// console.log(chalk.green('Hello node'));


// choose a package from here: https://github.com/sindresorhus/awesome-nodejs#weird
// create a project folder
// npm init
// install the package
// try it out

// there are also node internal modules / packages
// we don't need to npm install these but they need to be required

const crypto = require('crypto');
const randomString = crypto.randomBytes(64).toString('Hex');
// console.log(randomString);


const addNumbers = require('./add');
// console.log(addNumbers);
const sum = addNumbers(3, 5);
// console.log(sum);

// const functions = require('./functions');
// const greeting = functions.greetFunction();
// const goodbyemessage = functions.goodByeFunction();
// console.log(greeting, goodbyemessage);

const { greetFunction, goodByeFunction } = require('./functions');
console.log(greetFunction());