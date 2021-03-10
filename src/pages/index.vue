<script>
import Test from "../components/test";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    Test,
  },
  data: function(params) {
    return {
      title: "this is vue project",
      myTest: process.env.MY_TEST,
      visible: false,
    };
  },
  computed: {
    ...mapState("userModule", ["parentData"]),
  },
  methods: {
    jump() {
      this.visible = true;
      console.log("pdata", this.parentData);
    },
    editParentData() {
      // this.updateParentData({ title: "just title" });
      this.MICRO_HOOKS.setGlobalState({
        globalData: { title: "被子应用修改后的标题" },
      });
      this.visible = false;
    },
    ...mapMutations("userModule", ["updateParentData"]),
  },
  mounted() {
    console.log("111", this.MICRO_HOOKS);
    this.MICRO_HOOKS.onGlobalStateChange((state, prev) => {
      console.log("主应用传过来的数据222", state);
      this.updateParentData(state.globalData);
    }, true);
  },
};
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>主应用数据 {{ JSON.stringify(parentData) }}</h2>
    <test>
      <template #default="props">
        <h4>显示test组件成功, age=={{ props.user.age }}</h4>
      </template>
    </test>
    <div @click="jump()">修改主应用数据</div>
    <router-link to="/test">
      去测试页面
    </router-link>
    <el-dialog title="弹窗测试" :visible.sync="visible" center width="400px">
      <span>确定要修改吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="editParentData()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
