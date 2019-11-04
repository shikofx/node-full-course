const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( a < 0 || b < 0){
                return reject("a, b must be positive")
            }
            resolve(a + b);
        }, 2000);
    });
}

const doWork = async (a, b) => {
    const sum = await add(a, b);
    const sum1 = await add(sum, a);
    const sum2 = await add(sum1, b);
    return sum2;
}

// const doWork = async (a, b) => {
//     throw new Error('Something went wrong!!!')
//     return a + b;
// }

doWork(1, 10).then(result => {
    console.log(result);
    return doWork(result, -1);
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});