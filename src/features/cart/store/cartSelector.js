
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