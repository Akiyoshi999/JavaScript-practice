<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} task</p>
      <div :list="lists" class="list-index">
        <draggable :list="lists" class="list-index" @end="movingCard">
          <list
            v-for="(item, index) in lists"
            :key="item.id"
            :title="item.title"
            :cards="item.cards"
            :list-index="index"
            @change="movingCard"
          />
          <list-add />
        </draggable>
      </div>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
import List from './List.vue'
import { mapState } from 'vuex'
import draggable from 'vuedraggable'

export default {
  components: {
    ListAdd,
    List,
    draggable
  },
  computed: {
    ...mapState(['lists']),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  },
  methods: {
    movingCard: function() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
    movingList: function() {
      this.$store.dispatch('updateList', { lists: this.lists })
    }
  }
}
</script>
