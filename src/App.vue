<template>
   <router-view></router-view>
</template>

<script lang="ts">

import { ref, provide,onMounted } from "vue";

export default {
  name: 'App',
   setup() {
     onMounted(()=>{
      //注册事件
      window.onresize = function(){
        //防止侧边栏>500,左侧不显示
        if(document.body.clientWidth >= 500){
          menuVisible.value = true  
        }else{
          menuVisible.value = false
        }
      }
    })
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); // set
  },
}
</script>

