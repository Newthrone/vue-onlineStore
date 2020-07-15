<template>
  <div class="v-cart">
    <h1 class="v-cart-title">Cart</h1>
    <p v-if="!CARD.length">В корзине ничего нет</p>
    <router-link to="/">
      <div class="v-cart__link_to_cart">Back to catalog</div>
    </router-link>
    <section class="v-cart__catalog">
      <v-cart-item v-for="(card, index) in CARD"
                :key="index"
                :card="card"
                @removeCard="removeCard(index)"
                @decrement="decrement(index)"
                @increment="increment(index)"/>
    </section>
    <div class="v-cart__total">
      <p class="v-cart__total__name">Total:</p>
      <p>{{ cartTotalCost }} р.</p>
    </div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem,
  },
  computed: {
    ...mapGetters(['CARD', 'GET_TOTAL_COST']),
    cartTotalCost() {
      return this.GET_TOTAL_COST;
    }
  },
  methods: {
    ...mapMutations(['REMOVE_FROM_CARD', 'DECREMENT_ITEM_CART', 'INCREMENT_ITEM_CART']),
    removeCard(index){
      this.REMOVE_FROM_CARD(index);
    },
    decrement(index) {
      this.DECREMENT_ITEM_CART(index);
    },
    increment(index) {
      this.INCREMENT_ITEM_CART(index);
    },
  },
}
</script>

<style lang="scss">
  .v-cart {
    margin: 0 0 100px;

    &__catalog {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2vw;
    }

    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding * 2;
      border: 1px solid #aeaeae;
    }

    &__total {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      padding: $padding * 2 $padding * 4;
      background-color: teal;
      color: #ffffff;
      font-size: 20px;

      &__name {
        margin-right: $margin * 2;
      }
    }

  }

</style>
