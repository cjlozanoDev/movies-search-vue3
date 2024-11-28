export const mixinInputSearch = {
  data() {
    return {
      search: '',
      textError: null
    }
  },
  watch: {
    search(newSearch) {
      if (newSearch === '') {
        this.textError = 'Error, no se puede buscar una película vacía'
        return
      }
      if (newSearch.match(/^\d+$/)) {
        this.textError = 'No se puede buscar una película con un número'
        return
      }
      if (newSearch.length < 3) {
        this.textError = 'La búsqueda debe tener al menos 3 caracteres'
        return
      }
      this.textError = null
    }
  }
}
