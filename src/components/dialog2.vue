<template>
  <div>
    <Button type="primary" @click="showDialog">显示dialog</Button>
  </div>
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