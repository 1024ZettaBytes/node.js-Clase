var didYouAccomplished = true;
var promise = new Promise((yes, no) => {
    if (didYouAccomplished)
        yes("Accomplished.");
    else
        no("Didn´t accompish.");
});
promise.then((res)=>{
console.log(res);
}).catch((err)=>{
console.log(err);
});