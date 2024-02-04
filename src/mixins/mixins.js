const data = {
  count : 0
}

export default {
  data() {
    return data
  },
  computed:{  
    getCount() {
      console.log('From mixin [computed]')
      return this.count
    }

  },
  watch: {
    count(newVal, oldVal) {
      console.log('From mixin [watch]')
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  created() {
    console.log('From mixin [created]')
    this.count = 0
  },
  mounted() {
    console.log('From mixin [mounted]')
    this.count = 0
  },
  updated() {
    console.log('From mixin [updated]')
  }
}