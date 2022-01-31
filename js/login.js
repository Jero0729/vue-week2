import {createApp} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js";


      const App = {
        data() {
          return {
            url: "https://vue3-course-api.hexschool.io/v2",
            path: "mmee1122",
            user:{
                username: "",
                password: ""
            }
          };
        },
        methods: {
          signIn() {
            axios
              .post(`${this.url}/admin/signin`, this.user)
              .then((res) => {
                const { token, expired } = res.data;
                document.cookie = `meToken=${token};expires=${new Date(
                  expired
                )}`;
                window.location = "product.html";
              })
              .catch((err) => {
                alert(err.response.data.message);
              });
          },
        },
      };
    createApp(App).mount("#app");
