<template>
  <div class="v-catalog-item">
    <img :src="require('../assets/images/' + product.image)" class="v-catalog-item__image" alt="img">
    <p class="v-catalog-item__name">{{ product.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product.price }} р.</p>
    <button class="v-catalog-item__add_to_cart_btn btn"
            @click="addGoodtoCart">
      Add to cart
    </button>
  </div>
</template>

<script>

export default {
  name: 'v-catalog-item',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    }
  },
  data() {
    return {
    }
  },
  methods: {
    addGoodtoCart() {
      this.$emit('addGoodtoCart');
    }
  }
}
</script>

<style lang="scss">

  .v-catalog-item {
    box-sizing: border-box;
    flex-basis: 33%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin: 0 0 $margin*2;

    &__image {
      width: 100px;
      height: auto;
      object-fit: contain;
    }
  }

</style>
