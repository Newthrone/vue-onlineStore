<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {card: CARD}}">
      <div class="v-catalog__link_to_cart">Cart: {{ CARD.length }}</div>
    </router-link>
    <div>Catalog</div>
    <div class="catalogHolder">
      <v-catalog-item v-for="(card, index) in PRODUCTS"
                      :product="card"
                      @addGoodtoCart="addToCard(index)"
                      :key="card.article" />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item';
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CARD'])
  },
  methods: {
    ...mapMutations(['ADD_TO_CARD']),
    addToCard(index) {
      this.ADD_TO_CARD(index);
    },
  },
}
</script>

<style lang="scss">
  .catalogHolder {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .v-catalog {

    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding * 2;
      border: 1px solid #aeaeae;
    }

  }

</style>
