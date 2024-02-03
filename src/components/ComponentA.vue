<template>
  <div>
    <h2>Component A</h2>
    <p>Note : overwrite Mixins Here / data => count :10</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>Count: {{ count }}</p>
    <p>getCount [computed] {{ getCount }}</p>
  </div>
</template>

<script>
import shared from '@/mixins/shared'
export default {
  name: 'ComponentA',
  data() {
    return {
      count: 10
    }
  },
  mixins: [shared]
}
</script>

<style scoped></style>
