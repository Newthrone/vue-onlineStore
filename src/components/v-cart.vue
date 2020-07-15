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
                @removeCard="removeCard(index)"/>
    </section>
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
    ...mapGetters(['CARD']),
  },
  methods: {
    ...mapMutations(['REMOVE_FROM_CARD']),
    removeCard(index){
      this.REMOVE_FROM_CARD(index);
    }
  },
}
</script>

<style lang="scss">
  .v-cart {

    &__catalog {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2vw;
    }

    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding * 2;
      border: 1px solid #aeaeae;
    }

  }

</style>
