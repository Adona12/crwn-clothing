
export const addCartItem = (cartItems, cartItemtoAdd) => {

    const existingCartItem = cartItems.find(cartItem => {
        return (cartItem.id === cartItemtoAdd.id)
    });

    if (existingCartItem) {
        return cartItems.map(item => (
            item.id === cartItemtoAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }
    else {
        return [...cartItems, { ...cartItemtoAdd, quantity: 1 }]
    }
}

export const removeCartItem = (cartItems, cartItemtoRemove) => {
    const existingCartItem = cartItems.find(cartItem => {
        return (cartItem.id === cartItemtoRemove.id)
    });

    if (existingCartItem.quantity === 1) {

        return cartItems.filter(item => item.id !== cartItemtoRemove.id)

    } else {
        return cartItems.map(item => 
            cartItemtoRemove.id === item.id ? { ...item, quantity: item.quantity - 1 } : item)
    }


};