/* eslint no-var: 0 */
var exec = require('child_process').exec;

var cmdLine = './node_modules/.bin/webpack -p --progress --profile --config web_server/webpack-config.js';
var environ = (!process.argv[2].indexOf('development')) ? 'development' : 'production';
var command;

if (process.platform === 'win32') {
  cmdLine = 'set NODE_ENV=' + environ + ' ' + cmdLine;
} else {
  cmdLine = 'NODE_ENV=' + environ + ' ' + cmdLine;
}

console.log(cmdLine);
command = exec(cmdLine);

console.log('sss');
command.stdout.on('data', function(data) {
  process.stdout.write(data);
});
command.stderr.on('data', function(data) {
  process.stderr.write(data);
});
command.on('error', function(err) {
  process.stderr.write(err);
});
