const pet = {
    name: 'Henry'
}

pet.toJSON = function(){
    return {x: 'fafasdf'};
}

console.log(JSON.stringify(pet))