<template>
  <div class="kkb-rect">rect</div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log("rect is mounted");
    });
  },
};
</script>

<style>
.kkb-rect {
  background: red;
}
</style>
