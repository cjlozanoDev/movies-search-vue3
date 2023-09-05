<script>
import { mixinMovies } from './mixins/mixinMovies'
import { mixinSearch } from './mixins/mixinSearch'
import ListMovies from './components/ListMovies.vue'

export default {
  mixins: [mixinMovies, mixinSearch],
  components: {
    ListMovies
  },
  data() {
    return {
      sort: false
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      this.getMovies(this.search)
    }
  }
}
</script>

<template>
  <div class="page">
    <header>
      <h1>Listado de Pelis</h1>
      <form class="form" @submit="handleSubmit">
        <input type="text" v-model="search" />
        <button type="submit">Buscar</button>
      </form>
      <p v-if="textError" :style="{ color: 'red' }">
        {{ textError }}
      </p>
    </header>

    <main>
      <p v-if="loading">Cargando ...</p>
      <ListMovies v-if="movies?.length" :movies="movies" />
      <p v-if="!movies?.length && !isFirstInput">No se encontraron películas para esta búsqueda</p>
    </main>
  </div>
</template>
