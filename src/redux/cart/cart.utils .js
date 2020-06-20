
export const addCartItem = (cartItems, cartItemtoAdd) => {

    const existingCartItem = cartItems.find(cartItem => {
        return (cartItem.id === cartItemtoAdd.id)
    });

if(existingCartItem){
    return cartItems.map(item=>(
        item.id===cartItemtoAdd.id?{...item,quantity:item.quantity+1}:item
    ))
}
else{
    return [...cartItems,{...cartItemtoAdd,quantity:1}]
}
}