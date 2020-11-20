export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add-to-basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};
export default reducer;
