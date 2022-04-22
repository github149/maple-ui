<template>
    <div class="tabs">
      <h1>Switch 组件示例</h1>
      <div class="demo">
        <h2>常规用法</h2>
        <div class="demo-component">
          <Tabs v-model:selected="x">
            <Tab title="标题一">内容1</Tab>
            <Tab title="这是一个长的导航">内容2</Tab>
            <Tab title="标题三">内容3</Tab>
          </Tabs>
        </div>
        <div class="demo-actions">
         <Button v-if="dialog2Visible" @click="dialog2Visible=!dialog2Visible">查看代码</Button>
          <Button v-else @click="dialog2Visible=!dialog2Visible">隐藏代码</Button>
        </div>
        <div class="demo-code" v-show="!dialog2Visible">
          <pre>
           <code  ref="code" v-text="tabs" />
        </pre>
        </div>
      </div>
    </div>
</template>
<script>
import Tabs from "../libs/Tabs.vue";
import Tab from "../libs/Tab.vue";
import {tabs} from "./string.ts"
import { ref,onMounted } from "vue";
import highlightjs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import Button from "../libs/Button.vue"
export default {
  components: {
    Tabs,
    Tab,
    Button
  },
  setup() {
      onMounted(() => {
      highlightjs.highlightBlock(code.value);
    });
    const dialog2Visible = ref(true)
    const code = ref(null)
    const x = ref("标题一");
    return {
      x,
      tabs,
      code,
      dialog2Visible
    };
  },
};
</script>

<style scoped>

@media(min-width:700px){
  .tabs{
    min-width:700px;
  }
}
</style>