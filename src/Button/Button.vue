<template>
  <button class="kkb-button" @click="handleClick"><slot></slot></button>
</template>

<script>
export default {
  emits: ["click"],
  setup(_, { emit }) {
    const handleClick = () => {
      emit("click");
    };

    return {
      handleClick,
    };
  },
};
</script>

<style>
body {
  background: red;
}
</style>
