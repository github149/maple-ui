<template>
  <div>
    <h2>示例一：普通版打开dialog</h2>
    <Button type="primary" @click="showDialog">显示dialog</Button>
    <Dialog v-model:visible="visible" title="提示" :confirm="f1" :cancel="f2">
      <template v-slot:content>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </template>
    </Dialog>
    <h2>示例二:更简单的创建dialog</h2>
    <Button type="primary" @click="showEasy">显示dialog</Button>
  </div>
</template>
<script>
import { ref } from "vue";
import Button from "../libs/Button.vue";
import Dialog from "../libs/Dialog.vue";
import { openDialog } from "../libs/openDialog.ts";
export default {
  components: {
    Dialog,
    Button,
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
    };
    let showEasy = () => {
      //更简单的方式打开dialog
      openDialog({
        visible:true,
        title: "这是新的标题",
        content: "这是新的内容",
        confirm:()=>{console.log('confirm被调用了');return true},
        cancel:()=>{return true}
      });
    };
    return {
      showEasy,
      visible,
      showDialog,
      f2,
      f1,
    };
  },
};
</script>
