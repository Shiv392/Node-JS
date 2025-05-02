const fs = require('fs');

const WriteFile=()=>{
fs.writeFile('Profile.txt','New File Created222',(err)=>{
    if(err){
        console.log('error whiel creating async file--------->',err);
    }
    else{
        console.log('file craated successfully');
    }
})
}
module.exports={WriteFile}