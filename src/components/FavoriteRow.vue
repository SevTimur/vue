<template>
  <div class="product-row">
    <FavoriteProduct
      v-for="favorite in allFavorite"
      :key="favorite.id"
      :favorite="favorite"
    >
    </FavoriteProduct>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FavoriteProduct from "./FavoriteProduct";

export default {
  name: "FavoriteRow",
  data() {
    return {};
  },

  props: {},

  computed: {
    ...mapGetters(["allFavorite"]),
  },

  components: {
    FavoriteProduct,
  },
};
</script>

<style>
.product-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
}
</style>