import { ref, watch, computed, onMounted, onUpdated } from 'vue'
const state = {
  count: ref(null)
}

export function useCounter() {
  // Accept count as an argument
  const increment = () => {
    state.count.value++
  }

  const decrement = () => {
    state.count.value--
  }

  const getCount = computed(() => {
    console.log('From composition [computed]')
    if (state.count.value === 45) {
      state.count.value = 20
    }
    return state.count.value
  })

  watch(state.count, (newCount, oldCount) => {
    console.log('Count changed from', oldCount, 'to', newCount)
  })

  onMounted(() => {
    console.log('From composition [mounted]')
    state.count.value = 0
  })

  onUpdated(() => {
    console.log('From [updated]')
  })

  return {
    count: state.count,
    increment,
    decrement,
    getCount
  }
}
