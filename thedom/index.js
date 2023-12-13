// DO NOT USE .write()


const root = document.getElementById("root");
// const root = document.querySelector("#root");
const data = [
    {
        name:"LEGO SET 2",
        price:199.99,
        coolness:true
    },
    {
        name:"SONIC LEGO Set",
        price:19.99,
        coolness:false
    }
]

data.forEach((itm)=>{
    const ele = document.createElement("div");
    ele.classList.add("product");
    const title = document.createElement("h1");
    title.innerHTML=itm.name
    const price = document.createElement("h2");
    price.innerHTML=itm.price
    const fancyBox = document.createElement("div")

    if(itm.coolness){
        fancyBox.style.backgroundColor="rebeccapurple"
        fancyBox.style.border="5px black solid"
    }


    ele.appendChild(title);
    ele.appendChild(price);
    ele.appendChild(fancyBox);
    root.appendChild(ele);
})

// query selector grabs the first element

// document.querySelector(".product").style.backgroundColor="red";

// document.getElementsByClassName("product")[1].style.backgroundColor="red";

// getElementsByClassName create an array of the elements with the class specified

const products =document.getElementsByClassName("product");


[...products].forEach((ele)=>{
    ele.style.backgroundColor="red"
})

// console.log([...products])

const randomNumber = Math.floor(Math.random()*data.length)

console.log(data[randomNumber])

