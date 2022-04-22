<template>
  <div class="button">
    <div class="">
      <h2>示例一：普通版打开dialog</h2>
      <div class="demo">
        <h2>常规用法</h2>
        <div class="demo-component">
          <Dialog1 />
        </div>
        <div class="demo-actions">
          <Button v-if="dialog1Visible" @click="dialog1Visible=!dialog1Visible">查看代码</Button>
          <Button v-else @click="dialog1Visible=!dialog1Visible">隐藏代码</Button>
        </div>
        <div class="demo-code" v-show="!dialog1Visible">
          <pre>
           <code  ref="code1" v-text="dialog1" />
        </pre>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <h2>示例二:更优雅的创建dialog</h2>
      <div class="demo">
        <h2>常规用法</h2>
        <div class="demo-component">
          <Dialog2></Dialog2>
        </div>
        <div class="demo-actions">
          <Button v-if="dialog2Visible" @click="dialog2Visible=!dialog2Visible">查看代码</Button>
          <Button v-else @click="dialog2Visible=!dialog2Visible">隐藏代码</Button>
        </div>
        <div class="demo-code" v-show="!dialog2Visible">
          <pre>
           <code  ref="code2" v-text="dialog2" />
        </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dialog1 from "./dialog1.vue";
import Dialog2 from "./dialog2.vue";
import { ref, onMounted } from "vue";
import Button from "../libs/Button.vue";
import Dialog from "../libs/Dialog.vue";
import { dialog1 } from "./string.ts";
import { dialog2 } from "./string.ts";
import highlightjs from "highlight.js";
import "highlight.js/styles/vs2015.css";
export default {
  components: {
    Dialog,
    Button,
    Dialog1,
    Dialog2,
  },
  setup() {
    const dialog1Visible = ref(true)
    const dialog2Visible = ref(true)
    const visible = ref(false);
    const code1 = ref(null);
    const code2 = ref(null);
    onMounted(() => {
      highlightjs.highlightBlock(code1.value);
      highlightjs.highlightBlock(code2.value);
    });
    let showDialog = () => {
      visible.value = !visible.value;
    };
    let f1 = () => {
      return true;
    };
    let f2 = () => {
      return true;
    };

    return {
      code1,
      code2,
      dialog1,
      dialog2,
      visible,
      showDialog,
      f2,
      f1,
      dialog1Visible,
      dialog2Visible
    };
  },
};
</script>
<style lang="scss">
.mt-8{
  margin-left:8px;
}
.hljs language-xml {
  overflow: scroll;
}
.button {
  display: flex;
  flex-wrap: wrap;
}
.mt-40 {
  margin-top: 40px;
  margin-left: 8px;
}
@media (max-width: 700px) {
  .button {
    display: block;
  }
}
@media (min-width: 700px) {
  .demo {
    min-width: 700px;
  }
}
$border-color: #d9d9d9;
.demo {
  max-width: 700px;
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
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
