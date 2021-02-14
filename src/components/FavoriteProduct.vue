<template>
  <a href="product.html" class="product-card product-card_short">
    <div class="product-card__img">
      <img :src="favorite.image" alt="" />
    </div>
    <div class="product-card__content">
      <div class="product-card__name">{{ favorite.name }}</div>
      <div class="product-card__info">
        <div class="product-price">
          <div class="product-price__old">{{ favorite.price }} $</div>
          <div class="product-price__actual">
            <div class="product-price__new">{{ favorite.oldprice }} $</div>
            <div class="product-price__quantity">
              {{ favorite.quantity }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "FavoriteProduct",
  props: {
    favorite: Object,
  },
};
</script>


<style>
</style>