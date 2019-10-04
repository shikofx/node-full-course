console.log('Welcome to the classes');
console.log('Now will appeare an error!!!');
// sleep(3000);
console.error(new Error("Whoops! Something wrong!!!"));
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!!!`);

console.table([{a: 1, b: 'Y'}, {a: 'Z', b: 2}]);
console.table([{a: 1, b: 'Y'}, {a: 'Z', b: 2}], ['a']);
console.time("Start 100 elements creating....");

for(let i = 0; i < 100; i++){
}

console.timeEnd("Start 100 elements creating....");

console.trace("I show you all: ");