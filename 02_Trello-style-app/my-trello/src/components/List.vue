<template>
  <div class="list">
    <div class="listheader">
      <p class="=list-title">
        {{ title }}
      </p>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">
        x
      </div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <card
        v-for="(item, index) in cards"
        :body="item.body"
        :key="item.id"
        :cardIndex="index"
        :listIndex="listIndex"
      />
    </draggable>
    <Card-add :list-index="listIndex" />
  </div>
</template>

<script>
import Card from './Card.vue'
import CardAdd from './CardAdd'
import draggable from 'vuedraggable'

export default {
  components: {
    CardAdd,
    Card,
    draggable
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Number,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalCardInList() {
      return this.cards.length
    }
  },
  methods: {
    removeList: function() {
      if (confirm('本当にこのリストを削除しますか？')) {
        this.$store.dispatch('removelist', {
          listIndex: this.listIndex
        })
      }
    }
  }
}
</script>
