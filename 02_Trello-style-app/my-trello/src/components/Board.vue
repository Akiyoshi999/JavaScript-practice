<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} task</p>
      <div class="list-index">
        <list
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :cards="item.cards"
          :list-index="index"
        />
        <list-add />
      </div>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
import List from './List.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ListAdd,
    List
  },
  computed: {
    ...mapState(['lists']),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  }
}
</script>
