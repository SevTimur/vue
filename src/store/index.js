import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        izbr: 0,
        cart: 0,
        name: "C-3PO",
        image: "https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/c3po.png",
        link: "/product.html",
        oldprice: "108",
        price: "815",
        quantity: "за 1 шт",
        description: "Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни",
      },
      {
        id: 2,
        izbr: 0,
        cart: 0,
        name: "R2-D2",
        image: 'https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/r2d2.jpg',
        link: "/product.html",
        oldprice: "15000",
        price: "4000",
        quantity: "за 1 шт",
        description: "Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни",
      },
      {
        id: 3,
        izbr: 0,
        cart: 0,
        name: "R4-P17",
        image: "https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/r4.jpg",
        link: "/product.html",
        oldprice: "4815",
        price: "48",
        quantity: "за 1 шт",
        description: "Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни",
      },
      {
        id: 4,
        izbr: 0,
        cart: 0,
        name: "C1-10P",
        image: "https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/chopper.jpg",
        link: "/product.html",
        oldprice: "15000",
        price: "15",
        quantity: "за 1 шт",
        description: "Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни",
      },
      {
        id: 5,
        izbr: 0,
        cart: 0,
        name: "B1",
        image: "https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/b1.jpg",
        link: "/product.html",
        oldprice: "2342",
        price: "16",
        quantity: "за 1 шт",
        description: "Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни",
      },
    ],
    advantages: [
      {
        id: 1,
        title: "Преимущество 1",
        image: 'https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/r4.jpg',
        description: "Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни",
      },
      {
        id: 2,
        title: "Преимущество 1",
        image: 'https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/r2d2.jpg',
        description: "Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни",
      },
      {
        id: 3,
        title: "Преимущество 1",
        image: 'https://raw.githubusercontent.com/SevTimur/iamalievVue/master/img/b1.jpg',
        description: "Чрезвычайно хорошо сделанный дроид, ваше превосходительство. Он спас корабль, так же, как и наши жизни",
      },
    ],
    cart: [],
    favorite: [],
    selectedproduct: {},
  },
  getters: {
    allProducts: (state) => {
      return state.products;
    },
    allAdvantages: (state) => {
      return state.advantages;
    },
    allCart: (state) => {
      return state.cart;
    },
    allFavorite: (state) => {
      return state.favorite;
    },
    selectedProduct: (state) => {
      return state.selectedproduct;
    },
  },
  mutations: {
    allFavorite(state, n) {
      state.favorite.push(n);
      console.log(state.favorite);
    },
    allCart(state, n) {
      state.cart.push(n);
    },
    selectedProduct(state, n) {
      state.selectedproduct = n;
    }
  },
  actions: {},
  modules: {},
});