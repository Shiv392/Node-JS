const fs = require('fs');

const AppendFile=()=>{
    fs.appendFile('./Profile.txt','This is new conetnt',(err)=>{
        if(err){
            console.log('error while appenind in file------>',err);
        }
        else{
            console.log('new content has been appended');
        }
    })
}
module.exports={AppendFile};