<template>
  <div>
    <h2>Component B</h2>
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
import shared from '@/mixins/shared'
import ComponentC from './ComponentC.vue'
export default {
  name: 'ComponentB',
  mixins: [shared],
  data() {
    return {}
  },
  components: { ComponentC }
}
</script>

<style scoped></style>
