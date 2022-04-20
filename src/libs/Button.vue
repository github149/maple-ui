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
$primary-btn-color: #1890ff;
$primary-btn-hover: #40a9ff;
//初始样式
.maple-btn {
    
    border: none;
    outline: none;
    line-height: 1.5;
    white-space: nowrap;
    text-align: center;
    padding: 4px 16px;
    border-radius: 2px;
    cursor: pointer;
    margin: 4px;
    background: #fff;
  }
  .maple-btn:active {
    color: #fff;
    border-color: $primary-btn-color;
  }
  .maple-btn:hover {
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px #0000000b;
    color: $primary-btn-color;
    background-color: #fff;
  }
  //primary-button的样式
  .maple-btn-primary {
    color: #fff;
    background: $primary-btn-color;
  }
  
  .maple-btn-primary:hover {
    background: $primary-btn-hover;
    color: #fff;
  }
  
  //默认button样式
  .maple-btn-default {
    border: 1px solid #d9d9d9;
  }
  .maple-btn-default:hover {
    border: 1px solid $primary-btn-color;
    color: $primary-btn-color;
  }
  
  //虚线按钮样式
  .maple-btn-dashed {
    border: 1px dashed #d9d9d9;
  }
  
  //文本按钮
  .maple-btn-text {
    border-color: transparent;
  }
  .maple-btn-text:hover {
    color: #000;
    background-color: #fff;
    background: rgba(0, 0, 0, 0.028);
  }
  //链接按钮
  .maple-btn-link {
    color: $primary-btn-color;
  }
  .maple-btn-link:hover {
    text-shadow: none;
    box-shadow: none;
  }
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
