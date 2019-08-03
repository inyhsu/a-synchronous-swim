const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypressHandler = require('./keypressHandler');


// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  console.log(queue);
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  res.write(randomCommandGenerator());
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
}

var randomCommandGenerator = function() {
  var commands = ['up', 'down', 'left', 'right'];
  var index = Math.floor(Math.random() * commands.length);
  return commands[index];
}

// var input = () => {
//   keypressHandler.initialize(message =>
//     {console.log(message)})
// };
