<template>
  <div class="card">
    <button class="close-button" @click="removeCardFromList">
      x
    </button>
    <div class="body">
      {{ body }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true
    },
    listIndex: {
      type: String,
      required: true
    },
    cardIndex: {
      type: String,
      required: true
    }
  },
  methods: {
    removeCardFromList: function() {
      if (confirm('本当にこのカードを削除しますか？')) {
        this.$store.dispatch('removeCardFromList', {
          cardIndex: this.cardIndex,
          listIndex: this.listIndex
        })
      }
    }
  }
}
</script>
