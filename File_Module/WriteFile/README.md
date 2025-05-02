Node js fs modules gives option to writeFile and writeFileSync.

These function helps to create file by getting their file name and their content to be added.

1. writeFile -> 
it is async function that task file name to add and their contenet. If file is already present, then it will 
override the content.

const fs=require('fs');

fs.writeFile(filename,content,callback_fn);

2. writeFilesyn ->
it also create file but in synchronously.

fs.writeFileSyn(filename,content);