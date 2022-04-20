<template>
  <div>
    <Button type="primary" @click="close">显示dialog</Button>  
    <Dialog v-model:visible="visible"  title="提示" :confirm="f1" :cancel="f2" >
      <p>这是一段文字</p>
      <p>这是一段文字</p>
      <p>这是一段文字</p>
    </Dialog>
  </div>
</template>
<script>
import {ref} from "vue"
import Button from "../libs/Button.vue"
import Dialog from "../libs/Dialog.vue";
export default {
  components: {
    Dialog,
    Button
  },
  setup(){
      const visible = ref(false)
      let close = () =>{
          visible.value = !visible.value
      }
      let f1 = ()=>{
          return true
      }
      let f2 = ()=>{
          return true
      }
      return {
          visible,
          close,
          f2,
          f1,
      }
  }
};
</script>
