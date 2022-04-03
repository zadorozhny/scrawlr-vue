<template>
  <button
    class="button"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'KitButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  padding: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}
</style>
