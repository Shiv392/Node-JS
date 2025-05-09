
const cryptoEncryption=(payload)=>{
    const secretKey = "12345678901234567890123456789012"; // 32-char key
    const iv = "1234567890123456"; // 16-char IV
    
    return CryptoJS.AES.encrypt(
        JSON.stringify(payload),
        CryptoJS.enc.Utf8.parse(secretKey),
        {
            iv:CryptoJS.enc.Utf8.parse(iv),
            mode : CryptoJS.mode.CBC,
            padding : CryptoJS.pad.Pkcs7
        }
    ).toString();
}

const formSubmit=(event)=>{
    console.log('form submit--------->');
    event.preventDefault();

    const name=document.getElementById('name').value ;
    const email=document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('not encrypted -------->',{name,email,password});

    const payload={name,email,password};
    const encrypted=cryptoEncryption(payload);

    console.log('user details---------->',encrypted);

    fetch('http://localhost:8000',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body : JSON.stringify({data:encrypted})
    })
    .then(res=> res.json())
    .then(res=> alert('user logged in'))
    .catch(err=> console.log(err));
}