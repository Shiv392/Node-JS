const cluster = require('cluster');
const os = require('os');
const app = require('./index.js');
const http = require('http');

const numCPUs = os.cpus().length; //number of cpu cores 

if(cluster.isPrimary){   //cluster.isPrimary returns true only in the main processses.
  console.log(`Primary PID: ${process.pid}`);

  //this processes doesn't server request, it fork worker processes 
  // Fork as many workers as CPU cores i.e fork 8 web worker for 8 cores 
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();  //create a child process workder for each core 
    //all worker shared the same code but works independantly 
  }

  // Restart workers if they crash
  //works when the server gets crash, then restart server 
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();

    //if a worker crashesh the cluster forks a new workder 
  });
}
else{
    //inside the web workder or work process 
    //workder processes run http server

    //this code works once per worker 
    //every worker starts a server on port 8000
    //each request from a client distributed accross web workers by default node js load balancer in UNIX systems 
    const port = 8000;
    http.createServer(app).listen(port,()=>{
        console.log(`worker id : ${process.pid} listening on port ${port}`);
    })
}