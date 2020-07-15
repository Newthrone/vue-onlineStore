import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
/*   state: {
    products: [],
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    }
  },

  actions: {
    async GET_PRODUCTS_FROM_API({commit}) {
      try {
        const products = await axios('http://localhost:3000/products', {
          method: "GET"
        });
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      }
      catch (error) {
        console.error(error);
        return error;
      }
    }
  },

  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  }, */
  modules: {
    products,
    cart
  }
});
