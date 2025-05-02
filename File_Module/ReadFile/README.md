File Handleling in Node js helps to work with file including operation Reading file, Writing into file, Creatting new file for both 
asynchronous and asynchronous process.

1. First import the fs module
const fs=require('fs');

a. fs.readFile() -> this function is used to read file asynchronous way
fs.readFile(filepath,encoding,callback_fn)

b.fs.readFileSyn() -> same as readFile but it work synchronously . 