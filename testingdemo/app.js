// main file

function add(a,b){
    return Number(a)+Number(b);
}

function subtract(a,b){
    return a-b;
}

function createObject(data){
    const obj={};
    obj.name=data.name;
    obj.age=data.age;

    return obj;
}

function nuller(val){
    if(val==="luke"){
        return "luke"
    }else{
        return null
    }
}

module.exports = {add, subtract, nuller, createObject};