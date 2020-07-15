import Vue from 'vue'

export default {
  state: {
    cart: [],
  },

  mutations: {
    ADD_TO_CARD (state, card) {
      state.cart.push(card);
    },

    REMOVE_FROM_CARD(state, index) {
      state.cart.splice(index, 1);
    },
    DECREMENT_ITEM_CART(state, index) {
      state.cart[index].quantity -= 1;
    },
    INCREMENT_ITEM_CART(state, index) {
      state.cart[index].quantity += 1;
    },
  },

  actions: {
    GET_CATALOG_PRODUCTS({state, commit, rootGetters}, index) {
      let isExistGood = state.cart.some((item) => {
        if (item === rootGetters.PRODUCTS[index]) {
          item.quantity += 1;
          return true;
        }
      });
      if (!isExistGood) {
        Vue.set(rootGetters.PRODUCTS[index], 'quantity', 1);
        commit('ADD_TO_CARD', rootGetters.PRODUCTS[index]);
      }
    },
  },

  getters: {
    CARD(state) {
      return state.cart;
    },
    GET_TOTAL_COST(state) {
      let totalCost = state.cart.reduce((total, cardFromCart)=> {
        return total + (cardFromCart.quantity * cardFromCart.price);
      }, 0);
      return Math.ceil(totalCost * 100) / 100;
    }
  },
}
