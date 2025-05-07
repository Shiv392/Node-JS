const WriteStreams=()=>{
const fs = require('fs');

const writeStreams=fs.createWriteStream('text.txt');
writeStreams.write('hello world! \n');
writeStreams.write('writing into the file ');
writeStreams.end();
}
module.exports={WriteStreams};
