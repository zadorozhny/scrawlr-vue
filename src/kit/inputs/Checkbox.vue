<template>
  <label class="checkbox">
    <input
      v-bind="$attrs"
      :checked="modelValue"
      :disabled="disabled"
      type="checkbox"
      @change="change"
    >
    <slot />
  </label>
</template>

<script>
export default {
  name: 'KitCheckbox',
  inheritAttrs: false,
  model: {
    prop: 'model',
    event: 'update'
  },
  props: {
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const change = event => {
      emit('update:modelValue', event.target.checked);
    };

    return {
      change
    };
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  cursor: pointer;

  input {
    display: none;
  }
}
</style>
