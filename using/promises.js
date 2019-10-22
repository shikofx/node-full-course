const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([3,2,1]);
        reject('222');
    }, 2000);
});

doPromise.then((result) => {
    console.log('Success!, ', result);
}).catch((error) => {
    console.log('ERROR!, ', error);
});


//                              fulfilled
//                            /
// Promise     -- pending -->
//                            \
//                              rejected