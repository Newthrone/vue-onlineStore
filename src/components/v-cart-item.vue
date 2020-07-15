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
      <span>
        <span class="v-cart-item__quantity__decrease"
              @click="decreaseQty">-</span>
        {{ card.quantity }}
        <span class="v-cart-item__quantity__increase"
              @click="increaseQty">+</span>
      </span>
      </div>
    <button @click="removeCard"
            class="btn">
            Delete
    </button>
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
    decreaseQty() {
      if (this.card.quantity > 1) this.$emit('decrement');
      else this.removeCard();
    },
    increaseQty() {
      this.$emit('increment');
    }
  },
}
</script>

<style lang='scss'>
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $padding $padding * 2;
    box-shadow: 0 0 8px 0 #ccc;

    &__image {
      width: 50px;
    }

    &__quantity {

      &__decrease,
      &__increase {
        display: inline-flex;
        width: 25px;
        height: 25px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: rgb(179, 255, 255);
        border: 1px solid #444;
        cursor: pointer;
        user-select: none;
      }

    }

  }
</style>
