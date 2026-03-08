import { createSelector } from "@reduxjs/toolkit";

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

export const getTotalPrice = createSelector(
    (state) => state.product.allProducts,
    (state) => state.cart.productsInCart,
    (products, cartItems) => {
        const totalPrice = cartItems.reduce((total, item) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) return total;
            return total + product.discountedPrice * item.qty;
        }, 0);
        const discount = Math.floor(totalPrice * 0.1);
        const delivery = totalPrice > 500 ? 0 : 40;
        const finalPrice = totalPrice - discount + delivery;

        return { totalPrice, discount, delivery, finalPrice };
    });