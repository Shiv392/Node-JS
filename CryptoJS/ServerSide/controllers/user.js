
const crypto = require('crypto');

const decryptData=(encrypted)=>{
    const secretKey = "12345678901234567890123456789012";
    const iv = "1234567890123456";
    const decipher = crypto.createDecipheriv(
        "aes-256-ocb",
        Buffer.from(secretKey),
        Buffer.from(iv)
    );
    let decrypted = decipher.update(encrypted,"base64","utf8");
    decrypted+=decipher.final("utf8");
    return JSON.parse(decrypted);
}

const userlogin=(req,res)=>{
try{
const encrypted = req.body.data;
const decrypted = decryptData(encrypted);
console.log('decrypted ---------->',decrypted);

return (
    res.json(`<h1>shivsoni</h1>`)
)
}
catch(err){
    console.log('error--------->',err);
    res.status(502).json({success:false,message:'Server Error',error:err});
}
}
module.exports={userlogin}