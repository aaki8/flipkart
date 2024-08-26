import homeQuantityToggle from "./public/homeQuantityToggle";
import addToCart from "./public/addToCart";

const productContainer = document.querySelector(".productContainer");
const productTemplet = document.querySelector(".productTemplet");

export const showProductContainer = (product)=>{
        if(!product){
            return false;
        }
        product.forEach((curProd)=>{

                const { brand ,category , description , id, image, name,price, stock} = curProd;

                const productClone = document.importNode(productTemplet.content, true);

                productClone.querySelector(".ProductName").textContent = name;
                productClone.querySelector(".productImage").src = image;
                productClone.querySelector(".productDescription").textContent=description;
                productClone.querySelector(".productPrice").textContent=`$${price}`;
                productClone.querySelector(".productStock").textContent=stock;
                productClone.querySelector(".productActualPrice").textContent =`$${price*4}`;

                productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
                        homeQuantityToggle(event,id,stock);
                });

                productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
                        
                        addToCart(event ,id , stock);
                })
                productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);

                 productContainer.append(productClone);
        });
};