<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {card: CARD}}">
      <div class="v-catalog__link_to_cart">Cart: {{ CARD.length }}</div>
    </router-link>
    <h2>Catalog</h2>
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
import {mapGetters, mapActions} from 'vuex'

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
    ...mapActions(['GET_CATALOG_PRODUCTS']),
    addToCard(index) {
      this.GET_CATALOG_PRODUCTS(index);
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
