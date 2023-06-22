// code your solution here
function saturdayFun(todo="roller-skate") {
    return `This Saturday, I want to ${todo}!`;
}
const newTodo = "bathe my dog";
console.log(saturdayFun("drive"));
console.log(saturdayFun(newTodo));


function mondayWork(msg="go to the office") {
    return `This Monday, I will ${msg}.`;
}
const newMsg = "work from home.";
console.log(mondayWork(newMsg));
console.log(mondayWork());


function wrapAdjective(noun) {
    return function(adjective) {
        return `You are ${noun}${adjective}${noun}!`;
    }
}

