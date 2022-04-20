<template>
  <teleport to="#app">
    <div class="maple-dialog-wraper" v-if="visible" @click.self="close">
      <div class="maple-dialog">
        <div class="maple-dialog-header">
          {{ title }} <span @click="cancel">x</span>
        </div>
        <div class="maple-dialog-body"><slot /></div>
        <div class="maple-dialog-footer">
          <Button @click="cancel">取消</Button
          ><Button type="primary" @click="confirm">确认</Button>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script>
import Button from "../libs/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "这是一个title",
    },
    confirm: {
      type: Function,
      default: () => true,
    },
    cancel: {
      type: Function,
      default: () => true,
    },
  },
  setup(props, context) {
    let close = () => {
      context.emit("update:visible", !props.visible);
    };
    let cancel = () => {
      console.log(props.cancel());
      if (props.cancel?.() === true) {
        close();
      }
    };
    let confirm = () => {
      if (props.confirm?.() === true) {
        close();
      }
    };

    return {
      close,
      cancel,
      confirm,
    };
  },
};
</script>
<style lang="scss">
.maple-dialog-wraper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.45);
}
.maple-dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 420px;
  position: relative;
  background-color: #fff;
  border: 0;
  border-radius: 6px;
  background-clip: padding-box;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
.maple-dialog-header {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  color: #000000d9;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px 2px 0 0;
  > span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
}
.maple-dialog-body {
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
}
.maple-dialog-footer {
  border-top: 1px solid #e8eaec;
  padding: 12px 18px;
  text-align: right;
}
</style>
