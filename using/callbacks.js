// setTimeout(() => {
//     console.log('Two seconds are up');
// }, 2000);

// const names = ['Andrew', 'Jen', 'Jess'];

// const shortNames = names.filter(name => name.length <= 4);

// const geocode = (adress, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 2,
//             longitude: 5
//         };
//         callback(data);
//     }, 1500);
    
// };

// const data = geocode('Minsk', data => {
//     console.log(data)
// });

// console.log(shortNames);

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

add(1, 4, (sum) => {
    console.log(sum);
});