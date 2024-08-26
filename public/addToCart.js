import getCartProductFromLS from "./getCartProduct";
import updateCartValue from "./updateCartValue";

getCartProductFromLS();

const addToCart = (event ,id ,stock)=>{

        let arrLocalStorageProduct = getCartProductFromLS();

        const currentProdElem = document.querySelector(`#card${id}`);
        console.log(currentProdElem);

        let price = currentProdElem.querySelector(".productPrice").innerText;

        let quantity = currentProdElem.querySelector(".productQuantity").innerText;

     //  console.log(price,quantity);

        price = Number(price.replace("$",""));

        let existingProd = arrLocalStorageProduct.find((curProd)=>
         curProd.id === id 
        );

        if(existingProd && quantity > 1 ){
            quantity =  Number(existingProd.quantity) + Number(quantity); 
            price =     Number(price * quantity);
            let updateCart = {id , quantity , price};

           updateCart  = arrLocalStorageProduct.map((curProd) => {
               return curProd.id === id ? updateCart : curProd;
            });

               console.log(updateCart);
               localStorage.setItem("cartProductLS", JSON.stringify(updateCart)); 
        }

        if(existingProd){
         return false;
        }
        price = Number(price * quantity);
        quantity =  Number(quantity);  
        
       let updateCart = {id,quantity,price};

       arrLocalStorageProduct.push(updateCart);

       localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


   updateCartValue(arrLocalStorageProduct);

};


export default addToCart;