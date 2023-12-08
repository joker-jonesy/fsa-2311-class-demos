const list = ["michael", "tommy", "luke", "fiona"];

list.splice(1,2, "tyrice")
list.push("aaron");
console.log(list);

//for loops are a core essential to build your own js algo

// replaces use of for loop when working with arrays
// list.forEach((itm)=>{
//     console.log(itm)
// })

// const newList =list.map((itm)=>{
//     return {
//         name: itm
//     }
// })
//
// console.log(newList)

// undefined is a falsey value

// if(list.find((itm)=> itm ==="tommy")){
//     console.log("found")
// }else{
//     console.log("not found")
// }

// const result = list.filter((itm)=> itm.length >=5)
//
// // let the user know there are results coming back form the filter
// if(result.length>0){
//     console.log(result.length+" results found")
// }else{
//     console.log("results not found")
// }