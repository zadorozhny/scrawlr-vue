<template>
  <div class="main">
    <Container />
  </div>
</template>

<script>
import Container from '@/components/Container.vue'

export default {
  components: {
    Container
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
