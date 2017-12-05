var colors = require('colors');

if (process.argv.length <= 2) {
    console.log("Usage: habsay MESSAGE");
    process.exit(-1);
}

var msg = process.argv.slice(2).join(' ');
console.log(colors.rainbow("Habitat says: " + msg));
console.log("-- Test 1");
