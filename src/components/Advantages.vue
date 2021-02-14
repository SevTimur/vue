<template>
  <div class="advantages">
    <AdvantagesItem
      v-for="item in allAdvantages"
      :key="item.id"
      :item="item"
    ></AdvantagesItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AdvantagesItem from "./AdvantagesItem";

export default {
  data() {
    return {};
  },

  props: {},

  computed: {
    ...mapGetters(["allAdvantages"]),
  },

  components: {
    AdvantagesItem,
  },

  methods: {},
};
</script>

<style>
.advantages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.advantages__item {
  width: 30%;
}
.advantages__img {
  max-width: 100%;
  max-height: 200px;
}
</style>