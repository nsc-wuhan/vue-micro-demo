import Index from "../pages/index";
import Test from "../components/test";
const LoginPage = () =>
  import(/* webpackChunkName: 'Login' */ "../pages/login");

export default [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/test",
    component: Test,
  },
];
