<style scoped>
.box {
  color: #333;
  font-size: 20px;
}
</style>

<template>
  <div class="box">
    <span>{{ msg }}</span>
    <span
      ><slot :user="user"><h4>默认插槽内容</h4></slot></span
    >
    <a @click="jump()">跳转到app1-react首页</a>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data: function() {
    return { msg: "hello vue!", name: "kevin wu", user: { age: 10 } };
  },
  methods: {
    jump() {
      window.history.pushState({}, "", "/#/app1");
    },
  },
};
</script>
