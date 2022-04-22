<template>
<Button type="primary" @click="onClick">我是按钮!!!</Button>
      <Button>我是默认的!!!</Button>
      <Button type="dashed">我是虚线按钮</Button>
      <Button type="text">我是文本按钮</Button>
      <Button type="link">我是链接按钮</Button>
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