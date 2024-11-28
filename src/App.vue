<script setup>
import ListMovies from './components/ListMovies.vue'
import SearchInputMovie from './components/SearchInputMovie.vue'
import { ref } from 'vue'
import { useMovies } from './composables/useMovies'

const sort = ref(false)
const { getMovies, movies, loading, isFirstInput } = useMovies(sort)

</script>

<template>
  <div class="page">
    <header>
      <h1>Buscador pelis</h1>
      <SearchInputMovie @search-movies="getMovies"/>
      <input type="checkbox" v-model="sort" /> Ordenar asc/desc
    </header>

    <main>
      <p v-if="loading">Cargando búsqueda</p>
      <ListMovies :movies="movies" />
      <p v-if="!movies?.length && !isFirstInput">No se encontraron películas para esta búsqueda</p>
    </main>
  </div>
</template>
