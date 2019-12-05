<template>
  <div>
    <input
      id="radio-all"
      type="radio"
      name="swich-display"
      checked="checked"
      @change="changeRadioType(typeAll)"
    >
    <label for="radio-all">{{ typeAll }}</label>
    <input
      id="radio-doing"
      type="radio"
      name="swich-display"
      @change="changeRadioType(typeDoing)"
    >
    <label for="radio-doing">{{ typeDoing }}</label>
    <input
      id="radio-done"
      type="radio"
      name="swich-display"
      @change="changeRadioType(typeDone)"
    >
    <label for="radio-done">{{ typeDone }}</label>
  </div>
</template>

<script>
export default {
  computed: {
    typeAll() {
      return this.$store.getters.typeAll
    },
    typeDoing() {
      return this.$store.getters.typeDoing
    },
    typeDone() {
      return this.$store.getters.typeDone
    }
  },
  methods: {
    changeRadioType(radioType) {
      this.$store.dispatch('changeRadioType', radioType)
    }
  }
}
</script>
