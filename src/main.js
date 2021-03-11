import "./public-path";
import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import router from './router';

import store from "./store";
Vue.config.productionTip = false;
// export default new Vue({
//   el: '#root',
//   router,
//   store,
//   render: h => h(App),
// });
import VueRouter from "vue-router";
import routes from "./router/config.js";

Vue.use(VueRouter);
Vue.use(ElementUI);

let router = null;
let instance = null;

export const getRouterInstance = () => {
  return router;
};
function render(props = {}) {
  const { container } = props;
  console.log("vue子应用props", props);
  console.log("appName", props.appName);

  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/app2" : "/",
    mode: "hash",
    routes,
  });
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  // console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  // console.log("[vue] props from main framework", props);
  Vue.prototype.MICRO_HOOKS = {
    onGlobalStateChange: props.onGlobalStateChange,
    setGlobalState: props.setGlobalState,
  };

  props.onGlobalStateChange((state, prev) => {
    console.log("prev", prev);
    console.log("主应用传过来的数据", state);

    Vue.prototype.HISTORY = state.history;
  }, true);

  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
