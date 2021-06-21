<template>
  <div class="header">
    <button v-if="route" type="button" @click="$router.push('/')" >&laquo; Back</button>
    <h1>Famous Computer Scientists</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      route: false
    }
  },
  watch: {
    $route(path) {
      if (path.fullPath !== "/") {
        this.route = true
      } else {
        this.route = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  line-height: 3rem;
  border-bottom: .125rem solid #333;
  background: white;
  
  button {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
