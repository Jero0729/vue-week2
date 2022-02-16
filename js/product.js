import {createApp} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js";

const App = {
    data() {
      return {
        products: [],
        tempSelect: {},
        url: "https://vue3-course-api.hexschool.io/v2",
        path: "mmee1122",
      };
    },
    methods: {
      checkUser() {
        axios
          .post(`${this.url}/api/user/check`)
          .then((res) => {
            this.getData();
          })
          .catch((err) => {
            alert(err.data);
            window.location = "index.html";
          });
      },
      getData() {
        axios
          .get(`${this.url}/api/${this.path}/admin/products/all`)
          .then((res) => {
            this.products = res.data.products;
          })
          .catch((err) => {
            console.log(err.data);
          });
      },
      productSelect(product) {
        this.tempSelect = product;
      },
    },
    created() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)meToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      axios.defaults.headers.common["Authorization"] = token;
      this.checkUser();
    },
    mounted(){

    }
  };
  createApp(App).mount("#app");