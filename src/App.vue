<script setup>
import ListMovies from './components/ListMovies.vue'
import { ref } from 'vue'
import { useSearch } from './composables/useSearch'
import { useMovies } from './composables/useMovies'

const sort = ref(false)
const { search, textError } = useSearch()
const { getMovies, movies, loading, isFirstInput } = useMovies(sort)

const handlerSubmit = (event) => {
  event.preventDefault()
  getMovies(search)
}
</script>
>

<template>
  <div class="page">
    <header>
      <h1>Buscador pelis</h1>
      <form class="form">
        <input type="text" v-model="search" />
        <input type="checkbox" v-model="sort" />
        <button type="submit" @click="handlerSubmit">Buscar</button>
      </form>
      <p v-if="textError" :style="{ color: 'red' }">
        {{ textError }}
      </p>
    </header>
    <main>
      <p v-if="loading">Cargando búsqueda</p>
      <ListMovies :movies="movies" />
      <p v-if="!movies?.length && !isFirstInput">No se encontraron películas para esta búsqueda</p>
    </main>
  </div>
</template>
