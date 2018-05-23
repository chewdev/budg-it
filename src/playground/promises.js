const promise = new Promise((res, rej) => {
    setTimeout(() => {
        // res('This is my resolved data');
        // res('This is my other resolved data');
        rej('error');
    }, 1000);
    
});

console.log('before');

promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});
// either way works, easier to understand .catch for error handling
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error', error);
});




console.log('after');