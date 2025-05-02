const ApiCall = require('./APICall.js');

ApiCall().then(res=> console.log('api response---------->',res))
.catch(err=> console.log('error------------->',err));