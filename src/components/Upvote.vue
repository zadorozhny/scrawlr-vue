<template>
  <div
    class="upvote"
    :style="{
      '--color': color[active ? 'active' : 'inactive'].background
    }"
  >
    <kit-icon
      name="arrow"
      :color="color[active ? 'active' : 'inactive'].arrow"
    />
  </div>
</template>

<script>
export default {
  name: 'VUpvote',
  props: {
    active: { type: Boolean, default: false },
    color: { type: Object, default: () => ({
      active: { background: '#E5E8FD', arrow: '#253CF2' },
      inactive: { background: '#F4F6F8', arrow: '#343A40' },
    })}
  },
};
</script>

<style lang="scss" scoped>
.upvote {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 10px;
  background: var(--color);
}
</style>
