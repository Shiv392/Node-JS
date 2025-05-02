1. Node JS Module can be collection of function, classes, types etc together.
2. Node JS Module helps to write code once and use it everywhere needed multiple times.

There is basically two type of Module system in node js : 
a. Common Module
b. ES6 Module.

a. Common Module : Traditional way of defining module in Node JS.
//export some function------------------------->
module.exports={function1, function2};

here module.exports used to export function .

//import these exported function---------------------->
to impoort , we used require keyword 
const {function1}=require(path);


b.ES6 Module : New Module provided by ES6 version of the JS.
//export some function -------------------------->
export function Sum(a,b){
    
}
export function func2(){}

//impoort these functions --------------->
const {Sum} from 'path';
