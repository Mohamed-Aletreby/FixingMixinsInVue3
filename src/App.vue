<template>
  <div class="app">
    <ComponentA />
    <ComponentB />
    <ComponentD />
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
import ComponentD from './components/ComponentD.vue'
export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB,
    ComponentD
  }
}
</script>

<style scoped>
.app {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.app > div {
  width: calc(100% / 3);
  padding: 20px;
  background-color: white;
  border: 2px solid #ccc;
}
</style>
