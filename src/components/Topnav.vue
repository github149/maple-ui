<template>
  <div class="topnav" >
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-mapleleaf"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li><router-link class="bg_color" to="/doc/introduce">文档页</router-link></li>
    </ul>
    <div class="toggleAside" @click="toggleMenu" v-if="visible">
      <div class="close">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref, onMounted } from "vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    console.log(props.visible);
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.bg_color {
  color: white;
}
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > .icon {
      width: 34px;
      height: 34px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    
    width: 30px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > .close {
      height:100%;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      > span {
        border-radius:5px;
        width: 100%;
        display: block;
        background: #cd7b5c;
        height: 5px;   
      }
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
