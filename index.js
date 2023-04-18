import token from "./token.js";

// API
const url = "https://newsapi.org/v2/top-headlines?country=tw&apiKey=";
const classify =
  "https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=";

function getData() {
  return axios
    .get(`${url}${token}`)
    .then((res) => {
      console.log(res);
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

// Vue
const news = Vue.createApp({
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async getArticles() {
      this.articles = await getData();
      console.log(this.articles);
    },
  },
  mounted() {
    this.getArticles();
  },
}).mount("#main");
