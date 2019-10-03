
var promise = new Promise((res, rej)=>{
    if(true)
    return res("Done");
    else
    return rej("Failed");
});

promise.then(res=>{
    console.log(res);
}).catch(rej=>{
    console.log(rej);
});