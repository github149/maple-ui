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
  </div>
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