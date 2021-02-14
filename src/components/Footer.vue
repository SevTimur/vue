<template>
  <div class="footer-template">
    <footer>
      <div class="page-footer">
        <div class="container">
          <div class="top-footer">
            <div class="last-view">
              <FavoriteProduct
                v-for="favorite in allFavorite"
                :key="favorite.id"
                :favorite="favorite"
              >
              </FavoriteProduct>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <div class="container">
          <div class="bottom-footer__info">
            <div>
              <span>2021</span>
            </div>
            <div>
              <span>Sev</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import FavoriteProduct from "./FavoriteProduct";
import { mapGetters } from "vuex";

export default {
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

  methods: {},
};
</script>


<style>
</style>