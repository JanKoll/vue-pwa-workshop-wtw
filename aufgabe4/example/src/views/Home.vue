<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <FamousPreview :data="json"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FamousPreview from '@/components/FamousPreview.vue'
import famousjson from '/public/famous.json'

export default {
  name: 'Home',
  components: {
    FamousPreview
  },
  data () {
    return {
      json: famousjson
    }
  }
}
</script>
