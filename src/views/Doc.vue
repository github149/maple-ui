<template>
  <div class="layout">
    <Topnav class="nav" :visible="true"/>
    <div class="content">
      <aside v-if="menuVisible">
        
        <ol>
          
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li> 
          <li>
            <router-link to="/doc/start">起步</router-link>
          </li>
          
          <li class="componentList"><h2>组件列表</h2></li>  
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.router-link-active {
  background: white;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content { 
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  overflow: hidden;
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  z-index:200;
  background: #5caecd;
  width: 150px;
  
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    >.componentList{
      padding: 4px 16px;
    }
    > li {
      a{
        display: block;
         padding: 4px 16px;
        text-decoration: none;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>

