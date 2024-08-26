import products from "../api/product.json"

import {getCartProductFromLS }from "./getCartProduct";


let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd)=>{
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts);

const cartElement =document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct =() => {
    filterProducts.forEach((curProd) =>{
        const {category , id ,image ,name ,stock ,price} = curProd;
    let productClone = document.importNode(templateContainer.content, true);
    
    productClone.querySelector("#cardValue").setAttribute("id", `card$(id)`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;

    productClone.querySelector(".cart_img").src = image;

    cartElement.appendChild(productClone);
    
    });
}; 