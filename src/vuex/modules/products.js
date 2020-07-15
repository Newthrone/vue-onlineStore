import axios from 'axios'

export default {
  state: {
    products: [],
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    }
  },

  actions: {
    async GET_PRODUCTS_FROM_API({commit}, url) {
      try {
        const products = await axios(url, {
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
    },
  },
}
