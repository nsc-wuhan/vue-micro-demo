import Index from "../pages/index";
import Test from "../components/test";
import Template from "../components/template.vue";
const LoginPage = () =>
  import(/* webpackChunkName: 'Login' */ "../pages/login");

export default [
  // {
  //   path: "/app2",
  //   name: "home",
  //   component: Template,
  //   child: [],
  // },
  {
    path: "/",
    component: Index,
    children: [],
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/test",
    component: Test,
    props: { info: { name: "kevin", sex: "man" } },
  },
];
