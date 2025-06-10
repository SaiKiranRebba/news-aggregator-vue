import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/_common.scss";
import "@/assets/styles/_theme.scss";
import MemoryMonitor from "@/mixins/memoryMonitor";

Vue.mixin(MemoryMonitor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
