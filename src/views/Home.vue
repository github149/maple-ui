<template>
  <div class="container">
    <Topnav/>
    <div class="banner">
      <h1>Maple UI</h1>
      <h3>一个厉害的 UI 框架</h3>
      <p class="btn">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="content">
    <div class="vue center">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <div class="description">
        <h3>基于Vue3</h3>
        <p>骄傲的使用了Vue3新特性</p>
      </div>
    </div>
    <div class="ts center">
      <svg class="icon">
        <use xlink:href="#icon-typescript"></use>
      </svg>
      <div class="description">
        <h3>基于TypeScript</h3>
        <p>源代码使用了TypeScript书写（非严格检查）</p>
      </div>
    </div>
    <div class="tips center">
      <svg class="icon">
        <use xlink:href="#icon-dengpao_"></use>
      </svg>
      <div class="description">
        <h3>代码易读</h3>
        <p>每个组件的源代码都非常简洁</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
.container {
  clip-path: ellipse(80% 60% at 50% 40%);
  background-image: linear-gradient(
    45deg,
    #fd81b5 0%,
    #c961f7 50%,
    #8089ff 100%
  );
}
.content {
  margin-left: auto;
  margin-right: auto;
  padding: 80px 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > .center {
    padding: 20px;
    display: flex;
    > .description {
      padding: 7px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  // >.ts{
  //   margin-top:20px;
  //   margin-bottom:20px;
  // }
  .icon {
    width: 64px;
    height: 64px;
  }
}
.banner {
  line-height: 1.6;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  h3 {
    padding: 12px 0px;
  }
  > .btn {
    padding: 12px 6px;
    box-shadow: rgb(0 0 0 / 4%) 0px 2px;
    a {
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      
      margin: 0 12px;
      background: rgba(255, 255, 255, 0.5);
      color: #535efd;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0px 8px;
    }
  }
}
@media (min-width: 300px) {
  .content {
    padding: 15px;
  }
  .banner {
    padding: 50px;
  }
}
@media(max-width:500px){
  
}
@media (min-width: 500px) {
  .content {
    padding: 30px;
  }
}
@media (min-width: 600px) {
  .content {
    padding: 50px;
  }
}

@media (min-width: 600px) {
  .content {
    width: 600px;
  }
  .banner {
    padding: 100px 0px;
  }
}
@media (min-width: 1000px) {
  .content {
    width: 1000px;
    padding: 100px 0px;
  }
}
@media (min-width: 1200px) {
  .content {
    width: 1200px;
  }
}
</style>
