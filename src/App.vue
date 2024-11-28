<script>
import { mixinMovies } from './mixins/mixinMovies'
import SearchInput from './components/SearchInput.vue'
import ListMovies from './components/ListMovies.vue'

export default {
  mixins: [mixinMovies],
  components: {
    ListMovies,
    SearchInput
  },
  data() {
    return {
      sort: false
    }
  },
  methods: {
    searhMovies(textSearch) {
      this.getMovies(textSearch)
    }
  }
}
</script>

<template>
  <div class="page">
    <header>
      <h1>Listado de Pelis</h1>
      <SearchInput @search-movies="searhMovies"/>
    </header>

    <main>
      <p v-if="loading">Cargando ...</p>
      <ListMovies v-if="movies?.length" :movies="movies" />
      <p v-if="!movies?.length && !isFirstInput">No se encontraron películas para esta búsqueda</p>
    </main>
  </div>
</template>
