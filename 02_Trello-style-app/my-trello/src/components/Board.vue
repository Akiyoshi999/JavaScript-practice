<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: 0 task</p>
      <list-add />
    </main>
  </div>
</template>

<script lang="ts">
import ListAdd from './ListAdd.vue'

export default {
  components: {
    ListAdd,
  },
}
</script>
