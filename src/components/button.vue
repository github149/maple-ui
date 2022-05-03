<template>
  <div class="button">
    <div class="mt-40">
      <div class="demo">
        <h2>常规用法</h2>
        <h5>按钮五种类型：主按钮，次按钮，虚线按钮，文本按钮，链接按钮</h5>
        <div class="demo-component">
          <Button1 />
        </div>
        <div class="demo-actions">
          <Button v-if="btn1visible" @click="btn1visible = !btn1visible"
            >查看代码</Button
          >
          <Button v-else @click="btn1visible = !btn1visible">隐藏代码</Button>
        </div>
        <div class="demo-code" v-show="!btn1visible">
          <pre>
           <code  ref="code" v-text="string" />
        </pre>
        </div>
      </div>
    </div>

    <div class="mt-40">
      
      <div class="demo">
        <h2>用法一：不同尺寸</h2>
        <h5>支持large、normal、small三种尺寸</h5>
        <div class="demo-component">
          <Button2 />
        </div>
        <div class="demo-actions">
          <Button v-if="btn2visible" @click="btn2visible = !btn2visible"
            >查看代码</Button
          >
          <Button v-else @click="btn2visible = !btn2visible">隐藏代码</Button>
        </div>
        <div class="demo-code" v-show="!btn2visible">
          <pre>
           <code  ref="code2" v-text="btn2" />
        </pre>
        </div>
      </div>
    </div>

    <div class="mt-40">
      
      <div class="demo">
        <h2>用法二：父元素的宽度</h2>
        <h5>按钮为父元素的宽度</h5>
        <div class="demo-component">
          <Button3 />
        </div>
        <div class="demo-actions">
          <Button v-if="btn3visible" @click="btn3visible = !btn3visible"
            >查看代码</Button
          >
          <Button v-else @click="btn3visible = !btn3visible">隐藏代码</Button>
        </div>
        <div class="demo-code" v-show="!btn3visible">
          <pre>
           <code  ref="code3" v-text="btn3" />
        </pre>
        </div>
      </div>
    </div>

    <div class="mt-40">
      

      <div class="demo">
        <h2>用法三：禁用</h2>
        <h5>禁用按钮:绑定事件不会触发</h5>
        <div class="demo-component">
          <Button4 />
        </div>
        <div class="demo-actions">
          <Button v-if="btn4visible" @click="btn4visible = !btn4visible"
            >查看代码</Button
          >
          <Button v-else @click="btn4visible = !btn4visible">隐藏代码</Button>
        </div>
        <div class="demo-code">
          <pre v-show="!btn4visible">
           <code  ref="code4" v-text="btn4" />
        </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import highlightjs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { ref, onMounted, reactive, toRefs } from "vue";
import { btn1 } from "./string.ts";
import Button2 from "./button2.vue";
import Button from "../libs/Button.vue";
import Button1 from "./button1.vue";
import { btn2 } from "./string.ts";
import Button3 from "./button3.vue";
import { btn3 } from "./string.ts";
import Button4 from "./button4.vue";
import { btn4 } from "./string.ts";
export default {
  components: {
    Button,
    Button1,
    Button2,
    Button3,
    Button4,
  },

  setup() {
    const codeVisible = reactive({
      btn1visible: true,
      btn2visible: true,
      btn3visible: true,
      btn4visible: true,
    });
    const code = ref(null);
    const code2 = ref(null);
    const code3 = ref(null);
    const code4 = ref(null);
    onMounted(() => {
      console.log("code", code3);
      highlightjs.highlightBlock(code.value);
      highlightjs.highlightBlock(code2.value);
      highlightjs.highlightBlock(code3.value);
      highlightjs.highlightBlock(code4.value);
    });
    const string = btn1;
    let onClick = () => {
      console.log(11);
    };
    return {
      code,
      code2,
      code3,
      code4,
      string,
      onClick,
      btn2,
      btn3,
      btn4,
      ...toRefs(codeVisible),
    };
  },
};

//组件默认属性绑定到根元素
</script>
<style lang="scss">
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
  > h5 {
    padding: 8px 16px;
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
