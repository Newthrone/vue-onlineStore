import products from './products'

export default {
  state: {
    cart: [],
  },

  mutations: {
    ADD_TO_CARD: (state, index) => {
      let isExistGood = state.cart.some((item) => {
        if (item === products.getters.PRODUCTS(products.state)[index]) {
          item.quantity += 1;
          return true;
        }
      });
      if (!isExistGood) {
        products.getters.PRODUCTS(products.state)[index].quantity = 1;
        state.cart.push(products.getters.PRODUCTS(products.state)[index]);
      }
    },
    REMOVE_FROM_CARD: (state, index) => {
      state.cart.splice(index, 1);
    }
  },

  getters: {
    CARD(state) {
      return state.cart;
    },
  },
}
