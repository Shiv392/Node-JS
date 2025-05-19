// cache.js
const NodeCache = require("node-cache");
const nonceCache = new NodeCache({ stdTTL: 20 }); // expire in 20s max

module.exports = nonceCache;
