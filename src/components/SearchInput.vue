<script>
import { mixinInputSearch } from '../mixins/mixinInputSearch'

export default {
  mixins: [mixinInputSearch],
  data() {
    return {
      sort: false
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      this.$emit('search-movies', this.search)
    }
  }
}
</script>

<template>
  <form class="form" @submit="handleSubmit">
    <input type="text" v-model="search" />
    <button type="submit">Buscar</button>
  </form>
  <p v-if="textError" :style="{ color: 'red' }">
    {{ textError }}
  </p>
</template>

