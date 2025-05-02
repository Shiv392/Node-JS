const fs = require('fs');

const ReadFileSync=()=>{
//as this is sync process so it will direct retunr value
const data=fs.readFileSync('./Profile.txt','utf-8');
console.log('sync read data-------->',data);
}
module.exports={ReadFileSync}