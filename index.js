const { sayHello } = require('./utils')

const ui = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

ui.question('Hi there! What is your name?\n> ', input => {
  const message = sayHello(input)
  console.log(message)
  ui.close();
})
