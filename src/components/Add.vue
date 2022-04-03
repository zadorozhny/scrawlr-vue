<template>
  <kit-button>
    <div class="add">
      <kit-icon name="add" />
    </div>
  </kit-button>
</template>

<script>
export default {
  name: 'VAdd'
};
</script>

<style lang="scss" scoped>
.add {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 10px;
  background: #F4F6F8;
  transition: .25s ease-out;

  &:hover {
    box-shadow: 0 0 4px rgba(grey, .3);
  }
}
</style>
