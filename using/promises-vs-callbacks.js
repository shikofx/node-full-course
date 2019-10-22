const doCallback = (callback) => {
    setTimeout(() => {
        // callback('This is ERROR', undefined);
        callback(undefined, [1,2,3])
    }, 2000);
}

doCallback((error, result) => {
    if(error){
        return console.log(error);
    } 

    console.log(result);
});




