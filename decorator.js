
class ProductComponent{

    constructor(name){
        this.name = name;
    }

    getDetail(){
        return `${this.name}`;
    }
}

class ProductDecorator{

    constructor(productComponent){
        this.productComponent = productComponent;
    }

    getDetail(){
        return this.productComponent.getDetail();
    }

}

class ComercialInfoProductDecorator extends ProductDecorator{

    constructor(productComponent, tradename, brand){

        super(productComponent);

        this.tradename = tradename;
        this.brand = brand;

    }

    getDetail(){
        return `${this.tradename} ${this.brand}` + super.getDetail();
    }

}

class StoreProductDecorator extends ProductDecorator{
    constructor(productComponent, price){

        super(productComponent);
        this.price = price;

    }

    getDetail(){
        return super.getDetail() + ` $ ${this.price}`;
    }
}

class HTMLProductDecorator extends ProductDecorator{
    getDetail(){
        return `<h1>Información del producto</h1>
        <p>
            ${super.getDetail()}
        </p>
        `;
    }
}

const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

const comercialInfoProduct = new ComercialInfoProductDecorator(productComponent, 'Londo Porter', 'Fuller');
console.log(comercialInfoProduct.getDetail());

const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

const product = new StoreProductDecorator(comercialInfoProduct, 20.5);
console.log(product.getDetail());

const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();