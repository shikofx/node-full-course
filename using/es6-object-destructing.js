const product = {
    name: 'Red laptop',
    price: '700$',
    stock: 200,
    salePrice: undefined
};

//Direct way to get product properties
console.log(`${product.name} costs ${product.price}`);

//Destructuring
// const {name, stock} = product;
// console.log(name);
// console.log(stock);

//Destructuring
// const {name: label, stock, rating} = product;
// console.log(label);
// console.log(stock);
// console.log(rating);


//Destructuring
// const {name: label, stock, rating = 0.7} = product;

// product.rating = 5;
// //Destructuring
// console.log(label);
// console.log(stock);
// console.log(product.rating)
// console.log(rating);

product.brand = 'Asus';
// const {name, stock, rating, brand = 'Sumsung'} = product;
// console.log(name);
// console.log(stock);
// console.log(rating)
// console.log(brand);

const transaction = (type, { name, price, salePrice }) => {
    console.log(type, name, price, salePrice);
}

transaction('Order', product);
