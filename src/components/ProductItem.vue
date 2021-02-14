<template>
  <div>
    <a class="product-card">
      <object>
        <a class="izbr-button" @click="addToFavorite(product)">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M14.5818 1C12.2909 1 10.7363 2.22727 9.99994 3.12727C9.26358 2.30909 7.70904 1 5.41813 1C2.30904 1 0.181763 3.94546 0.181763 7.21818C0.181763 9.67273 1.40904 14.4182 9.67267 18.9182C9.83631 19 10.0818 19 10.3272 18.9182C18.5909 14.4182 19.8181 9.67273 19.8181 7.21818C19.8181 3.86364 17.6909 1 14.5818 1ZM9.99994 17.6091C5.99085 15.4 1.49085 11.7182 1.49085 7.21818C1.49085 4.68182 2.96358 2.30909 5.41813 2.30909C7.21813 2.30909 8.77267 3.45455 9.42722 4.51818C9.67267 4.92727 10.2454 4.92727 10.5727 4.51818C10.5727 4.51818 11.9636 2.30909 14.5818 2.30909C17.0363 2.30909 18.509 4.68182 18.509 7.21818C18.509 11.7182 14.009 15.4 9.99994 17.6091Z"
                fill="#FB4B54"
                stroke="white"
                stroke-width="0.25"
                stroke-miterlimit="10"
              />
            </g>
            <rect
              x="19.8182"
              y="13.6235"
              width="4.20779"
              height="9.81818"
              rx="2"
              transform="rotate(90 19.8182 13.6235)"
              fill="white"
            />
            <rect
              x="12.8051"
              y="10.8182"
              width="4.20779"
              height="9.81818"
              rx="2"
              fill="white"
            />
            <rect
              x="18.4156"
              y="15.0259"
              width="1.4026"
              height="7.01299"
              rx="0.701299"
              transform="rotate(90 18.4156 15.0259)"
              fill="#FB4B54"
            />
            <rect
              x="14.2078"
              y="12.2206"
              width="1.4026"
              height="7.01299"
              rx="0.701299"
              fill="#FB4B54"
            />
            <defs>
              <clipPath id="clip0">
                <rect
                  width="19.6364"
                  height="19.6364"
                  fill="white"
                  transform="translate(0.181763 0.181824)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </object>
      <router-link to="/Product">
        <div class="product-card__img" @click="onProduct(product)">
          <img :src="product.image" alt="" /></div
      ></router-link>
      <div class="product-card__content">
        <div class="product-card__name">
          {{ product.name }}
        </div>
        <div class="product-card__info">
          <div class="product-price">
            <div class="product-price__old">{{ product.oldprice }} $</div>
            <div class="product-price__actual">
              <div class="product-price__new">{{ product.price }} $</div>
              <div class="product-price__quantity">
                {{ product.quantity }}
              </div>
            </div>
          </div>
          <object>
            <a
              data-toggle="modal"
              data-target="#button-tovar-v-korzine"
              class="in-cart"
              @click="onModal(product)"
            >
              В корзину
            </a>
          </object>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    product: Object,
    index: Number,
  },
  methods: {
    ...mapMutations(["favoriteAdd"]),
    onProduct(item) {
      this.$emit("on-product", item);
    },
    onModal(item) {
      this.$emit("on-modal", item);
    },
    addToFavorite: function (index) {
      this.$emit("add-favorite", index);
    },
  },
};
</script>

<style>
</style>