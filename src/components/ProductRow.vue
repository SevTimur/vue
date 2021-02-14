<template>
  <div class="product-row">
    <ProductItem
      v-for="product in allProducts"
      :key="product.id"
      :product="product"
      @add-favorite="addfavorite"
      @on-modal="onmodal"
      @on-product="onproduct"
    >
    </ProductItem>
    <Modal :visible="visible" @modal-clean="visible = false">
      <input type="text" name="name" placeholder="Ваше имя*" />
      <input
        type="tel"
        name="phonenumber"
        placeholder="Номер телефона*"
        id="maskformphone"
      />
      <input type="email" name="email" placeholder="E-mail" />
      <button type="submit" class="button-1 button-1_form">Отправить</button>
    </Modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ProductItem from "./ProductItem";
import Modal from "./Modal";

export default {
  data() {
    return {
      productmodal: {},
      visible: false,
    };
  },

  props: {},

  computed: {
    ...mapGetters(["allProducts"]),
  },

  components: {
    ProductItem,
    Modal,
  },

  methods: {
    ...mapMutations(["allCart"]),
    ...mapMutations(["allFavorite"]),
    ...mapMutations(["selectedProduct"]),

    onproduct(index) {
      this.selectedProduct(index);
    },
    addfavorite(index) {
      this.allFavorite(index);
    },
    onmodal(index) {
      this.visible = true;
      this.allCart(index);
      this.selectedProduct(index);
    },
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