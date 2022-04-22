<template>
  <button :class="{ checked: value }" props.disabled><span @click="toggle"></span></button>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean,
    disabled:Boolean
  },
  setup(props, context) {
    let toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #dcdfe6;
  border-radius: $h/2;
  position: relative;
}
span {
  transition: all .2s;
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:active {
  > span {
    width: $h2 + 4px;
  }
}
button.checked:active {
  > span {
    width: $h + 4px;
    margin-left: -4px;
  }
}
</style>
