<template>
  <div class="container">
    <ul class="container--list">
      <li v-for="index in count" :key="index">
        <kit-checkbox v-model="active">
          <v-upvote :active="active" />
        </kit-checkbox>
      </li>
    </ul>
    <v-add @click="increment"/>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import VUpvote from '@/components/Upvote.vue'
import VAdd from '@/components/Add.vue'

export default {
  name: 'VContainer',
  components: {
    VAdd,
    VUpvote
  },
  setup() {
    const store = useStore()
    const count = ref(3)

    const active = computed({
      get: () => store.state.active,
      set: () => store.commit('toggle')
    });

    const increment = () => ++count.value

    return {
      count,
      active,
      increment
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, min-content);
  grid-column-gap: 20px;
  align-items: center;

  &--list {
    display: grid;
    grid-auto-flow: column;
    justify-content: flex-start;
    grid-column-gap: 10px;
    padding: 7px;
    max-width: 400px;
    border: solid 1px #dee2e6;
    border-radius: 10px;
    overflow-x: auto;
  }
}
</style>
