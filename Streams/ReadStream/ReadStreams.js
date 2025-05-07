const ReadStreams=()=>{
const fs = require('fs');

//cretea a readable stream----------------->
const readableStream=fs.createReadStream('BigFile.txt',{encoding:'utf-8'});

readableStream.on('data',(chunk)=>{
    console.log('chunk------------>',chunk);
})

readableStream.on('end',()=>{
    console.log('no more data to read---------->')
})
}

module.exports={ReadStreams}