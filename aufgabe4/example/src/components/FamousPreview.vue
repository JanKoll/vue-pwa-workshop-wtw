<template>
  <div v-for="item in data" :key="item.id" class="famous-container" @click="root(item)">
    <figure>
      <div :style="{ background: 'url(/data/' + item.img + ')' }" class="famous-img"></div>
      <figcaption>
        <h2>{{ item.name }} {{ item.familyname }}</h2>
        <p>Birth: <i>{{ beautyDate(item.birth) }}</i></p>
        <p v-if="item.death">Died: <i>{{ beautyDate(item.death) }}</i></p>
      </figcaption>
    </figure>
    <div class="intro">{{ item.intro.slice(0, 190) }}<span v-if="item.intro.length > 190">...</span></div>
  </div>
</template>



<script>

export default {
  name: 'FamousPreview',
  props: {
    data: Object
  },
  methods: {
    beautyDate(date) {
      return new Date(date).toDateString();
    },
    root(data) {
      this.$router.push({ name: 'Famous Computer Scientist', params: data })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$gray: #333;

.famous-container {
  border-bottom: 1px solid $gray;
  padding: 2rem .5rem;
  &:hover {
    cursor: pointer;
    background: #eee;
  }
  figure {
    display: flex;
    align-items: center;
    .famous-img {
      border-radius: 100%;
      background-size: cover !important;
      display: block;
      height: 8rem;
      width: 8rem;
    }
    figcaption {
      margin-left: 1rem;
    }
  }
  .intro {
    margin-top: 1rem;
  }
}
</style>
