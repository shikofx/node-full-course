
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000);
    })
}

//Baaaaaaaaaaaaaad Solution
// add(1,2).then(result => {
//     console.log(result);
//     add(result, 5).then(result1 => {
//         console.log(result1);
//     }).catch(error => {
//         console.log(error.message);
//     })
// }).catch(error => {
//     console.log(error.message);
// })

//Gooooooooooooood
add(1, 1).then(result => {
    console.log(result);
    return add(result, 4);
}).then(result => {
    console.log(result);
    return add(result, 6);
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error.message);
})