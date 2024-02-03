<template>
  <div>
    <h2>Component D | fixMixin</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>Count: {{ count }}</p>
    <p>getCount [computed] {{ getCount }}</p>
  </div>
</template>

<script>
import { useCounter } from '@/mixins/composition'
export default {
  name: 'ComponentD',
  setup() {
    const { count, increment, decrement, getCount } = useCounter()

    return {
      count,
      increment,
      decrement,
      getCount
    }
  }
}
</script>

<style scoped></style>
