<template>
  <div class="v-cart-item">
    <img :src="require('../assets/images/' + card.image)" class="v-cart-item__image" alt="img">
    <div class="v-cart-item__info">
      <p>{{ card.name }}</p>
      <p>{{ card.price }}</p>
      <p>{{ card.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty</p>
      {{ card.quantity }}
      </div>
    <button @click="removeCard">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
      card: {
        type: Object,
        default() { return {} }
      }
  },
  methods: {
    removeCard() {
      this.$emit('removeCard');
    },
    decreaseCount() {
      if (this.card.quantity > 1) this.card.quantity -= 1;
      else this.removeCard();
    }
  },
  // beforeMount() {
  //   this.$set(this.card, 'quantity', 1)
  // }
}
</script>

<style lang='scss'>
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #ccc;

    &__image {
      width: 50px;
    }
  }
</style>
