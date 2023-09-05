<script setup>
defineProps({
  movies: {
    type: Array,
    default: () => {}
  }
})
</script>

<template>
  <ul class="movies">
    <li class="movie" v-for="movie in movies" :key="movie.id">
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.year }}</p>
      <img :src="movie.poster" :alt="movie.title" />
    </li>
  </ul>
</template>
