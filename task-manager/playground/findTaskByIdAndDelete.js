require('../src/db/mongooseApp');
const Task = require('../src/models/task');

Task.count( { } ).then((number) => {
    console.log(`Вначале у нас ${number} задачи`);
    return Task.findByIdAndDelete('5db854ce12edf31390479e6c');
}).then(result => {
    console.log('Удаляем запись:\n');
    console.log(result);
    return Task.countDocuments( {} )
}).then(number => {
    console.log(`Осталось записей ${number}`);
}).catch(error => {
    console.log(error.message);
})
// Task.findByIdAndDelete().then(task => {
//     return Task;
// }).then();