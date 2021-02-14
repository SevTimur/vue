<template>
  <div class="advantages__item">
    <img :src="item.image" alt="" class="advantages__img" />
    <div class="advantages__title">{{ item.title }}</div>
    <div class="advantages__text">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvantagesItem",
  props: {
    item: Object,
  },
};
</script>


<style>
</style>