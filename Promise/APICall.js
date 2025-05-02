const FetchUser=()=>{
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=> res.json())
        .then(data=> resolve(data))
        .catch(err=> reject(err));
    })
}



module.exports=FetchUser;