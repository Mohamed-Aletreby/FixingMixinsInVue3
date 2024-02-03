const data = {
  count: 0
}
export default {
  // Shared logic goes here

  data() {
    return data
  },
  methods: {
    // Shared methods
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  computed: {
    getCount() {
      console.log('From [computed]')
      return this.count
    }
  },
  watch: {
    count() {
      console.log('From [watch]')
    }
  },
  // Other component options...
  created() {
    console.log('From [created]')
    this.count = 1
  },
  mounted() {
    console.log('From [mounted]')
    this.count = 2
  },
  updated() {
    console.log('From [updated]')
  }
}
