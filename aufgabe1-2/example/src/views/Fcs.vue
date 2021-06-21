<template>
  <div class="famouscs">
    <h2>{{ data.name }} {{ data.familyname }}</h2>
    <img :src="`/data/${data.img}`" class="famous-img" />
    <p><b>Birth: <i>{{ beautyDate(data.birth) }}</i><span v-if="data.death"> / Died: <i>{{ beautyDate(data.death) }}</i></span></b></p>
    <p>{{ data.intro }}</p>
    <p>Wikipedia Article: <a :href="data.wikilink" target="_blank">Learn More...</a></p>
  </div>
</template>

<script>

export default {
  name: 'Fcs',
  data () {
    return {
      data: this.$route.params
    }
  },
  methods: {
    beautyDate(date) {
      return new Date(date).toDateString();
    }
  }
}
</script>

<style scoped lang="scss">
.famouscs {
  padding: 2rem 1rem;

  .famous-img {
    width: 100%;
    height: auto;
  }
}
</style>
