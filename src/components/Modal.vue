<template>
  <div class="modal" v-if="visible">
    <div class="modal__body" role="dialog" aria-modal="true">
      <a class="modal__close" href="" @click="modalClean">X</a>
      <div class="modal__title">Товар {{ selectedProduct.name }} в корзине</div>
      <form class="modal__form" method="get">
        <slot> </slot>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Modal",
  props: {
    visible: Boolean,
  },
  methods: {
    modalClean() {
      this.$emit("modal-clean");
    },
  },
  computed: {
    ...mapGetters(["selectedProduct"]),
  },
};
</script>


<style>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 99;
  visibility: visible;
}
.modal:before {
  content: "";
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #ffffff;
  opacity: 0.9;
}
.modal__body {
  position: relative;
  background: #ffffff;
  width: 500px;
  max-width: 100%;
  padding: 80px 75px 70px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  z-index: 9999;
}
.modal__close {
  position: absolute;
  top: 30px;
  right: 30px;
}
.modal__title {
  text-align: center;
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 139.9%;
  color: #6d6d6d;
}
.modal__form {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex-direction: column;
}
.modal__form input {
  height: 56px;
  margin-bottom: 20px;
  font-size: 0.8rem;
  padding: 19px 10px 15px 15px;
  border: 1px solid #acacac;
  border-radius: 3px;
}
</style>