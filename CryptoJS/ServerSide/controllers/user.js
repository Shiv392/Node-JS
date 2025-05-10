
const crypto = require('crypto');

const decryptData = (encrypted,ivBase64) => {
  const secretKey = "12345678901234567890123456789012"; // 32 bytes
//   const iv = "1234567890123456"; // 16 bytes

  const iv = Buffer.from(ivBase64, "base64"); // decode the received IV

  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(secretKey),
    iv
  );

  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return JSON.parse(decrypted);
};

const userlogin=(req,res)=>{
try{
// const encrypted = req.body.data;
const { data, iv } = req.body; //get data and iv from the client side ---------->
const decrypted = decryptData(data,iv);
console.log('decrypted ---------->',decrypted);

return (
    res.status(200).json({success:true,message:'Login Successfull',user:decryptData})
)
}
catch(err){
    console.log('error--------->',err);
    res.status(502).json({success:false,message:'Server Error',error:err});
}
}
module.exports={userlogin}