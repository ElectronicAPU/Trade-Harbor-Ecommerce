export const addDecimals = (nums) => {
  return (Math.round(nums * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate Item Price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc, item) => acc >= 0 && acc + item.price * item.qty,
      0
    )
  );

  // Calculate Shipping Price (if order is over $100 then free, else $10 shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // Calculate Tax Price
  state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice));

  // Calculate Total Price
  state.totalPrice =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice).toFixed(2);

  // Update local storage with a new object to avoid mutations
  localStorage.setItem("cart", JSON.stringify({ ...state }));

  return state;
};
