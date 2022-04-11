class Product {
    productName: string;
    productId: number;
    productPrice: number;

    acceptDetails(Prod: IProduct) {
        this.productName = Prod.productName;
        this.productId = Prod.productId;
        this.productPrice = Prod.productPrice;
    }
    print() {
        console.log("Product Id : " + this.productId);
        console.log("Product Name : " + this.productName);
        console.log("Product Price : " + this.productPrice);
    }
}

interface IProduct {
    productName: string;
    productId: number;
    productPrice: number;

}
var values = {
    productName: 'Keyboard',
    productId: 10,
    productPrice: 123456
}

var product = new Product();
product.acceptDetails(values);
product.print();
