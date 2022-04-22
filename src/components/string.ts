export const switchdemo1 = `
<template>
<Switch v-model:value="bool" />
</template>
<script lang="ts">
import {Switch} from 'maple-ui'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool,
      
    }
  }
}
<\/script>`
export const btn1 = `
<template>
<Button type="primary" @click="onClick">我是按钮!!!</Button>
      <Button>我是默认的!!!</Button>
      <Button type="dashed">我是虚线按钮</Button>
      <Button type="text">我是文本按钮</Button>
      <Button type="link">我是链接按钮</Button>
</template>
<script lang="ts">
import {Button} from "maple-ui";
export default {
  components: {
    Button,
  },
  setup(){
      let onClick=()=>{
          console.log("我是可以绑定事件的")
      }
      return {
          onClick
      }
  } 
}
<\/script>
`
export const btn2 = `
<template>
      <Button type="primary" size="large" @click="onClick">large</Button>
      <Button type="primary" size="normal">normal</Button>
      <Button type="primary" size="small">small</Button>
      <Button type="dashed" size="large">large</Button>
      <Button type="dashed" size="normal">normal</Button>
      <Button type="dashed" size="small">small</Button>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";
export default {
  components: {
    Button,
  },
  setup(){
      let onClick=()=>{
          console.log("我是可以绑定事件的")
      }
      return {
          onClick
      }
  } 
}
</script>
`
export const btn3 = `
<template>
    <Button type="primary" block>large</Button>
    <Button block>large</Button>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";
export default {
  components: {
    Button,
  },
}
</script>
`
export const  btn4 = `
<template>
    <Button type="primary" disabled @click="onClick">我是按钮!!!</Button>
      <Button disabled>我是默认的!!!</Button>
      <Button disabled type="dashed">我是虚线按钮</Button>
      <Button disabled type="text">我是文本按钮</Button>
      <Button disabled type="link">我是链接按钮</Button>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";
export default {
  components: {
    Button,
  },
}
</script>
`
export const dialog1 = `
<template>
  <div>
    <Button type="primary" @click="showDialog">显示dialog</Button>
    <Dialog v-model:visible="visible" title="提示" :confirm="f1" :cancel="f2">
      <template v-slot:content>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </template>
    </Dialog>
</template>
<script>
import { ref } from "vue";
import Dialog from "../libs/Dialog.vue";
import Button from "../libs/Button.vue"
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false);
    let showDialog = () => {
      visible.value = !visible.value;
    };
    let f1 = () => {
      return true;
    };
    let f2 = () => {
      return true;
    }
    return {
      visible,
      showDialog,
      f2,
      f1,
    };
  },
};
</script>
`
export const dialog2 = `
<template>
  <div>
    <Button type="primary" @click="showDialog">显示dialog</Button>
</template>
<script>
import {openDialog} from "../libs/openDialog.ts"
import Button from "../libs/Button.vue"
export default {
  components: {
    Button
  },
  setup() {
    let showDialog = () => {
      //更简单的方式打开dialog
      openDialog({
        visible: true,
        title: "这是新的标题",
        content: "这是新的内容",
        confirm: () => {
          console.log("confirm被调用了");
          return true;
        },
        cancel: () => {
          return true;
        },
      });
    }
    return {
      showDialog,
    };
  },
};
</script>
`

export const tabs = `
<template>
  <Tabs v-model:selected="x">
    <Tab title="标题一">内容1</Tab>
    <Tab title="这是一个长的导航">内容2</Tab>
    <Tab title="标题三">内容3</Tab>
  </Tabs>
</template>
<script>
import Tabs from "../libs/Tabs.vue";
import Tab from "../libs/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("标题一");
    return {
      x,
    };
  },
};
</script>
`