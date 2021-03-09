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
    <div><a @click="jump()">跳转到app1-react首页</a></div>
    <!-- <div><a @click="jumpHash()">hash模式跳转</a></div> -->
    <el-dialog title="弹窗测试" :visible.sync="visible" center>
      <span>确定要跳转吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="jumpHistory()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Demo",
  props: {
    info: Object,
  },
  data: function() {
    return {
      msg: "hello vue!",
      name: "kevin wu",
      user: { age: 10 },
      visible: false,
    };
  },
  methods: {
    jump() {
      console.log("info==", this.info);
      this.visible = true;
      // window.history.pushState({}, "", "/#/app1");
    },
    jumpHistory() {
      this.visible = false;
      this.HISTORY.push("/app1");
    },
    jumpHash() {},
  },
};
</script>
