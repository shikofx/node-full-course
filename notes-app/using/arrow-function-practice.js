const tasks = {
    tasks: [{
        text: 'Grocety shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    
    getTasksToDo(){
        return this.tasks.filter(task => task.completed === false);
    },

    toString(){
        var str = '';
        this.tasks.forEach(task => str +=`text = ${task.text} and completed = ${task.completed} \n`);
        return str;
    }

}


console.log(tasks.getTasksToDo());
console.log(tasks.toString());