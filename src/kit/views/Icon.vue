<template>
  <component
    :is="icon"
    :style="{
      '--color': color
    }"
    class="icon"
  />
</template>

<script>
import { computed } from 'vue'
import IconAdd from '@/assets/icons/add.svg'
import IconArrow from '@/assets/icons/arrow.svg'

export default {
  name: 'KitIcon',
  components: {
    IconAdd,
    IconArrow
  },
  props: {
    name: { type: String, required: true },
    color: {
      type: String,
      default: '#343A40'
    }
  },
  setup(props) {
    const icon = computed(() => `icon-${props.name}`)

    return {
      icon
    }
  }
}
</script>

<style lang="scss" scoped>
.icon ::v-deep(path) {
  fill: var(--color);
}
</style>
