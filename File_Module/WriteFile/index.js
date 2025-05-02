const {writeFile, WriteFile}=require('./WriteFile.js');
const {WriteFileSync} = require('./WriteFileSync.js');

WriteFile();
console.log('write file async');

console.log('write file sync');
WriteFileSync();