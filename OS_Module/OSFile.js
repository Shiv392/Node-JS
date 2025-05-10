const main=()=>{
    const os = require('os');

    //1. os.platform() returns the current platform like win32,linux,macos etc
    console.log('server platform--->',os.platform()); 

    //2. os.arch() return the architecture of the CPU
    console.log('cpu architecture--->',os.arch());

    //3. os.cpus() return array information of the all cores like how many cors os have
    console.log('cpus()--->',os.cpus());
    //get the number of core cpus
    console.log('cpus count ---->',os.cpus().length)

    //4. os.hostname() return the host name of the os
    console.log('hostname-->',os.hostname());

    //5. os.uptime() return the uptime when the system last restart
    console.log('uptime--->',os.uptime());

    //6. os.freemem() and os.totalmem(), return free memory and total memory bytes.
    console.log('total memory--->',os.totalmem());
    console.log('free memory--->',os.freemem());

    //7. os.userInfo() returns information about the current user
    console.log('user info---->',os.userInfo());

    //8. os.networkInterfaces() return network information like ip address etc
    console.log('network info--->',os.networkInterfaces());

    //9. os.tempdir() retruns path for the temp directory used to store temporary file
    console.log('temp dir--->',os.tmpdir())

    //10. os.type() returns os name
    console.log('os name---->',os.type())
}

module.exports={main};