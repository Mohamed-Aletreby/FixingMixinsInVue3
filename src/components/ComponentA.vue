<template>
  <div>
    <h2>Component A | fixMixin</h2>
    <p>Note : overwrite Mixins Here / data => fixingUsed :"Composition"</p>
    <p>{{ fixingUsed }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>Count: {{ count }}</p>
    <p>getCount [computed] {{ getCount }}</p>
  </div>
</template>

<script>
import { useCounter } from '@/mixins/composition'
export default {
  name: 'ComponentA',
  setup() {
    const { count, increment, decrement, getCount } = useCounter()

    return {
      count,
      increment,
      decrement,
      getCount
    }
  },
  data() {
    return {
      fixingUsed: 'Composition'
    }
  }
}
</script>

<style scoped></style>
