
export const selectCartProducts = (state) => {
    const products = state.product.allProducts;
    const cartItems = state.cart.productsInCart;
    const cartProducts = cartItems.map((item) => { const productDetails = products.find((product) => product.id === item.id); return { ...productDetails, qty: item.qty } });
    return cartProducts;
}

export const getProductQty = (productId) => (state) => {
    const cartProducts = state.cart.productsInCart;
    const item = cartProducts.find((item) => item.id === productId)
    return (item && item.qty) || 0;
}

export const getTotalPrice = (state) => {
    var total = 0;
    const totalPrice = state.cart.productsInCart.map((item) => {
        const productInCart = state.product.allProducts.filter((product) => product.id === item.id);
        console.log(`originalPrice=> ${productInCart[0].discountedPrice}`)
        return (total + productInCart[0].discountedPrice);
    })
        // Price calculations
    const discount = Math.floor(totalPrice * 0.1);
    const delivery = totalPrice > 500 ? 0 : 40;
    const finalPrice = totalPrice - discount + delivery;
    return {discount, delivery, finalPrice, totalPrice};
}