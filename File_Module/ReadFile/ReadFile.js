const fs= require('fs');

const ReadFile=()=>{
    fs.readFile('./Profile.txt','utf-8',(err,data)=>{
        if(err){
            console.log('error while reading file-------->',err);
        }
        else console.log('file content async------>',data);
    })
}

module.exports={ReadFile}
