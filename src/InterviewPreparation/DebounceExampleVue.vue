<template>
  <div id="app">
    <input type="text" v-model="search" />
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      search: '',
      timer: null
    }
  },
  watch: {
    search () {
      this.debounceCall();
    }
  },
  methods: {
    debounceCall () {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log("call api from here", this.search);
      }, 500)
    }
  }
};
</script>