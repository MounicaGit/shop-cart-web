
export const selectCartProducts = (state) => {
    const products = state.product.allDeals;
    const cartItems = state.cart.productsInCart;
    const cartProducts = cartItems.map((item) => { const productDetails = products.find((product) => product.id === item.id); return { ...productDetails, qty: item.qty } });
    return cartProducts;
}