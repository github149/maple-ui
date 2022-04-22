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