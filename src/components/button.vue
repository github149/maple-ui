<template>
  <div>
    
    <div class="mt-40">
        <h5>按钮五种类型：主按钮，次按钮，虚线按钮，文本按钮，链接按钮</h5>
      <Button type="primary" @click="onClick">我是按钮!!!</Button>
      <Button>我是默认的!!!</Button>
      <Button type="dashed">我是虚线按钮</Button>
      <Button type="text">我是文本按钮</Button>
      <Button type="link">我是链接按钮</Button>
    </div>
    
    <div class="mt-40">
        <h5>支持large、normal、small三种尺寸</h5>
      <Button type="primary" size="large">large</Button>
      <Button type="primary" size="normal">normal</Button>
      <Button type="primary" size="small">small</Button>
      <Button type="dashed" size="large">large</Button>
      <Button type="dashed" size="normal">normal</Button>
      <Button type="dashed" size="small">small</Button>
    </div>
    
    <div class="mt-40">
        <h5>按钮为父元素的宽度</h5>
      <Button type="primary" block>large</Button>
      <Button block>large</Button>
    </div>
    
    <div class="mt-40">
        <h5>禁用按钮:绑定事件不会触发</h5>
      <Button type="primary" disabled @click="onClick">我是按钮!!!</Button>
      <Button disabled>我是默认的!!!</Button>
      <Button disabled type="dashed">我是虚线按钮</Button>
      <Button disabled type="text">我是文本按钮</Button>
      <Button disabled type="link">我是链接按钮</Button>
    </div>
  </div>
</template>
<script>
import Button from "../libs/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    let onClick = () => {
      console.log(11);
    };
    return {
      onClick,
    };
  },
};

//组件默认属性绑定到根元素
</script>
<style lang="scss">
.mt-40{
    margin-top:40px;
}
    
</style>
