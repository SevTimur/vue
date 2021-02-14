<template>
  <div class="product">
    <div class="product__name">{{ selectedProduct.name }}</div>
    <img :src="selectedProduct.image" class="product__img" />
    <div class="product__price">{{ selectedProduct.price }} $</div>
    <div>{{ selectedProduct.description }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Product",
  props: {},
  computed: {
    ...mapGetters(["selectedProduct"]),
  },
  components: {},
  methods: {},
};
</script>


<style>
.product {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.product__img {
  width: 200px;
}
.product__name {
  font-size: 30px;
}
.product__price {
  font-size: 50px;
}
</style>