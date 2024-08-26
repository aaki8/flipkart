 const homeQuantityToggle = (event ,id, stock)=>{

    const currentCradElement = document.querySelector(`#card${id}`);

    const productQuantity = currentCradElement.querySelector(".productQuantity");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity = quantity + 1;
        }
        else if(quantity == stock){
            quantity = stock;
        }
    }
    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity = quantity - 1;
        }
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
    
};

export default homeQuantityToggle;