<template>
  <div>
    <h2>Component D</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>Count: {{ count }}</p>
    <p>getCount [computed] {{ getCount }}</p>
  </div>
</template>

<script>
import shared from '@/mixins/shared'
export default {
  name: 'ComponentD',
  mixins: [shared]
}
</script>

<style scoped></style>
