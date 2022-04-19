<template>
  <div>
    <Switch v-model:value="x"></Switch>
  </div>
</template>
<script>
import { ref } from "vue";
import Switch from "../libs/Switch.vue";
export default {
  components: {
    Switch,
  },

  setup() {
    const x = ref(false);
    return {
      x
    };
  },
};
</script>
