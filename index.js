// code your solution here
function saturdayFun(activity='roller-skate') {
    console.log(activity)
        return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    console.log(activity)
        return  `This Monday, I will ${activity}.`
}

function wrapAdjective(style = "*"){
    return function innerFunction (adjective){
        return `You are ${style}${adjective}${style}!`   
}
}
