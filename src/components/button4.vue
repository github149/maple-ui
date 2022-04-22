<template>
    <Button type="primary" disabled>我是按钮!!!</Button>
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