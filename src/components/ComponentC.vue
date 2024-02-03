<template>
  <div>
    <h2>Component C</h2>
    <p>Note : overwrite Mixins Here</p>
    <button @click="increment">Increment By 10</button>
    <button @click="decrement">Decrement By 10</button>
    <p>Count: {{ count }}</p>
    <p>getCount [computed] {{ getCount }}</p>
  </div>
</template>

<script>
import shared from '@/mixins/shared'
export default {
  name: 'ComponentC',
  mixins: [shared],
  methods: {
    increment() {
      this.count += 10
    },
    decrement() {
      this.count -= 10
    }
  }
}
</script>

<style scoped></style>
