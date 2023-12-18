class App{
    constructor(){
        this.products=[];
        this.renderedProducts =[]
    }
}


class ProductElement {
    constructor(obj){
        this.price=obj.price;
        this.stock=obj.stock;
        this.onSale=false;
        this.name=obj.name;
        this.ele=document.createElement("div");
    }

    renderElement(){
        this.ele.innerHTML=this.name;
        document.body.appendChild(this.ele);
    }
}

const rLS = new ProductElement({
    price:149.99,
    stock:50,
    name:"Raiders of the Lost Ark"
})

rLS.renderElement();


