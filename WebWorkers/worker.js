const {parentPort} = require('worker_threads');

parentPort.on('message',(msg)=>{
    console.log('worker recieved --------->',msg);
    let ans=0;
    for(let i=0;i < 10000000000000;i++){
        ans+=i;
    }
    parentPort.postMessage(ans);
})