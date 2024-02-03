<template>
  <div>
    <h2>Component B | fixMixin</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>Count: {{ count }}</p>
    <p>getCount [computed] {{ getCount }}</p>
    <hr />
    <p>Component C are child in Component B</p>
    <ComponentC />
  </div>
</template>

<script>
import { useCounter } from '@/mixins/composition'
import ComponentC from './ComponentC.vue'
export default {
  name: 'ComponentB',
  components: { ComponentC },
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
