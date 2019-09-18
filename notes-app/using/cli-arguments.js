//to run use:       
    //node using-cli-arguments Dzmitry

// console.log(process.argv);

// console.log(process.argv[2]);

//to run use:       
    //node using-cli-arguments add
    //node using-cli-arguments remove
command = process.argv[2];

console.log(process.argv);

if(command === 'add'){
    console.log('Adding note...');
} else if(command === 'remove'){
    console.log('Removing note...');
}