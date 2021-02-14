<template>
  <div class="base-layout">
    <Header :cart="allCart" :favorite="allFavorite">></Header>
    <div class="body">
      <slot>Ничего не передано</slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import { mapGetters } from "vuex";

export default {
  props: {},
  computed: {
    ...mapGetters(["allProducts"]),
    ...mapGetters(["allCart"]),
    ...mapGetters(["allFavorite"]),
  },
  components: {
    Header,
    Footer,
  },
  methods: {},
};
</script>


<style>
</style>