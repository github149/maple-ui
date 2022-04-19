<template>
  <button class="maple-btn" :class="type">
    <slot />
  </button>
</template>
<script>
import { computed } from "vue";
export default {
  //事件继承给根元素
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
  setup(props) {
    let type = computed(() => `maple-btn-${props.type}`);
    return {
      props,
      type,
    };
  },
};
</script>
<style lang="scss">

@import "./index.scss";
@import "./button.scss";
//大中小样式
[size="large"] {
  height: 40px;
  padding: 7px 16px;
}

[size="small"].maple-btn {
  height: 24px;
  padding: 0px 7px;
}
[block].maple-btn {
  width: 100%;
}
[disabled].maple-btn-text,
[disabled].maple-btn-link {
  pointer-events: none;
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}

[disabled].maple-btn-primary,
[disabled].maple-btn-default,
[disabled].maple-btn-dashed {
    pointer-events: none;
    color: #00000040;
    border-color: #d9d9d9;
    background: #f5f5f5;
    text-shadow: none;
    box-shadow: none; 
}
</style>
