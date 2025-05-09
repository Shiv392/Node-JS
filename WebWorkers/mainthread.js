const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');

worker.postMessage('start work');

worker.on('message',(data)=>{
    console.log('res from webworker---->',data);
})

console.log('main thread working--------->');