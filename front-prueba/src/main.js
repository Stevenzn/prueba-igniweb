import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
app.use(VueSweetalert2);
app.use(router);

app.mount("#app");
