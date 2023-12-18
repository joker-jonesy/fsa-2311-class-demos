const data = ["james", "preston", "fiona"];

function createElement(itm){
//     parent element
    const ele = document.createElement("div");

//     add class to parent element
    ele.classList.add("parent");

//     child elements
    const name = document.createElement("h1");
    name.innerHTML=itm;

    // append child element into parent element

    ele.appendChild(name);

//     put parent element into container element

    document.body.appendChild(ele);
}

createElement(data[0]);