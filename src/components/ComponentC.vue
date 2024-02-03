<template>
  <div>
    <h2>Component C | fixMixin</h2>
    <p>Note : overwrite Mixins Here</p>
    <button @click="incrementBy10">Increment By 10</button>
    <button @click="decrementBy10">Decrement By 10</button>
    <p>Count: {{ count }}</p>
    <p>getCount [computed] {{ getCount }}</p>
  </div>
</template>

<script>
import { useCounter } from '@/mixins/composition'
export default {
  name: 'ComponentC',
  setup() {
    const { count, increment, decrement, getCount } = useCounter()

    return {
      count,
      increment,
      decrement,
      getCount
    }
  },
  methods: {
    incrementBy10() {
      this.count += 10
    },
    decrementBy10() {
      this.count -= 10
    }
  }
}
</script>

<style scoped></style>
