<template>
  <div>
    <h2>Switch 组件示例</h2>
    <div class="demo">
      <h3>常规用法</h3>
      <div class="demo-component">
        <Switch1Demo />
      </div>
      <div class="demo-actions">
        <Button  @click="codeVisible = !codeVisible" v-if="codeVisible">查看代码</Button>
        <Button v-else @click="codeVisible = !codeVisible">隐藏代码</Button>
      </div>
      <div class="demo-code" v-show="!codeVisible">
        <pre>
           <code  ref="code" v-text="string" />

        </pre>
      </div>
    </div>
  </div>
</template>
<script>
import highlightjs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { ref, onMounted } from "vue";
import Button from "../libs/Button.vue";
import Switch from "../libs/Switch.vue";
import Switch1Demo from "./Switchdemo1.vue";
import { switchdemo1 } from "./string.ts";
export default {
  components: {
    Button,
    Switch,
    Switch1Demo,
  },

  setup() {
    const codeVisible = ref(true)
    const bool = ref(false);
    const code = ref(null);
    onMounted(() => {
      console.log(code.value);
      highlightjs.highlightBlock(code.value);
    });
    const string = switchdemo1;

    return {
      bool,
      string,
      code,
      codeVisible
    };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  max-width: 600px;
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h3 {
    font-size: 16px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
