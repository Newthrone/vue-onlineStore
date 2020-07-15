<template>
  <div class="v-main-wrapper">
    <h1 contenteditable>{{ title }}</h1>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'v-main-wrapper',
  data() {
    return {
      title: "I'm v-main-wrapper",
      url: 'http://localhost:3000/products',
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
  },
  created() {
    this.GET_PRODUCTS_FROM_API(this.url);
      // .then((response) => {
      //   if(response.data) console.log(response);
      // })
  }
}
</script>

<style>
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }

</style>
