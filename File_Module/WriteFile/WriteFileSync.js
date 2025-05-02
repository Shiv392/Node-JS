const fs = require('fs');

const WriteFileSync=()=>{
fs.writeFileSync('ProfileSync.text','This is syn write file');
}
module.exports={WriteFileSync};