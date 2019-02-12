// reducers

const initialState = {
  all: []
};

const all = (state = initialState.all, action) => {
  switch (action.type) {
    case "RECIVE_PRODUCTS":
      return action.products;
    case "ADD_TO_CART":
      const productId = action.products.id;
      const porduct = state.find(item => item.id === productId);
      porduct.inventory--;

      console.log(action);

      return [...state];
    default:
      return state;
  }
};
export default (state = initialState, action) => {
  return {
    all: all(state.all, action)
  };
};
