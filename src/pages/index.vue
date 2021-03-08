<script>
import Test from "../components/test";
export default {
  name: "Home",
  components: {
    Test,
  },
  data: function(params) {
    return { title: "this is vue project", myTest: process.env.MY_TEST };
  },
  methods: {
    jump() {
      window.history.pushState({}, "", "/#/app2/test");
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>全局变量 {{ myTest }}</h2>
    <test>
      <template #default="props">
        <h4>显示test组件成功, age=={{ props.user.age }}</h4>
      </template>
    </test>
    <div @click="jump()">去测试页面</div>
    <router-link to="/test">
      去测试页面
    </router-link>
  </div>
</template>
