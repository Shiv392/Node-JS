appendFile() in node js , add some conetnt in the existing file. In case if file is not present 
then first it will create then it will add that content.

const fs = require('fs');

fs.appendFile(file_path,new_content);
