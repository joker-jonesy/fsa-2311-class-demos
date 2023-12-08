// = assigning value
// == or === checking for values are same
// === strict
// == not strict

const product1 = {
    name: "Temple of the Golden Idol",
    price: 149.99,
    inStock: true,
    categories: ["indiana jones", "expensive", "2023"]
}

product1.price = 159.99;
product1.name = "Golden Idol Set";

console.log(product1.price, product1.name)

if (product1.price > 100) {
    console.log("thats expensive")
}

const cart = [
    {
        name: "Temple of the Golden Idol",
        price: 149.99,
        inStock: true,
        categories: ["indiana jones", "expensive", "2023"]
    },
    {
        name: "A-Frame Cabin",
        price: 179.99,
        inStock: true,
        categories: ["expert", "creator", "expensive", "2023"]
    }
];

// are there items in my cart?
if (cart.length > 0) {
    // console.log("items are in cart")
} else {
    // console.log("there are no items in the cart")
}

// does the user have 3 or more items in their cart?
if (cart.length >= 3) {
    // console.log("Youre an awesome customer")
}

let total =0;

for (let i = 0; i < cart.length; i++) {

    // is the item in the cart list in stock?

    if(cart[i].inStock){
        console.log(cart[i].name+" is in stock")
    }

    total=total+cart[i].price
}

console.log(total)


