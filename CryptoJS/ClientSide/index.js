
const cryptoEncryption=(payload)=>{
    const secretKey = "12345678901234567890123456789012"; // 32-char key
    // const iv = "1234567890123456"; // 16-char IV

    //implementing a function to encrypt same data in the diffrent way with different iv
    const iv = CryptoJS.lib.WordArray.random(16); // Random IV (128 bits)
    
      const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(payload),
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }
  );

  return {
    encryptedData: encrypted.toString(),
    iv: CryptoJS.enc.Base64.stringify(iv) // Send IV as Base64
  };
}

const formSubmit=(event)=>{
    console.log('form submit--------->');
    event.preventDefault();

    const name=document.getElementById('name').value ;
    const email=document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('not encrypted -------->',{name,email,password});

    const payload={name,email,password,timestamp : Date.now(),nonce:crypto.randomUUID()};
    const {encryptedData,iv}=cryptoEncryption(payload);

    console.log('user details---------->',encryptedData);

    fetch('http://localhost:8000',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body : JSON.stringify({data:encryptedData,iv:iv})
    })
    .then(res=> res.json())
    .then(res=> alert('user logged in'))
    .catch(err=> console.log(err));
}